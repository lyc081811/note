import rest from 'rest';
import mime from 'rest/interceptor/mime';
import timeout from 'rest/interceptor/timeout';
import errorCode from 'rest/interceptor/errorCode';
import _ from 'underscore';
import crypto from 'crypto';

import translateResponse from './translateResponse';
import { Env, ServerUrl } from './constants';
import logger from './logger';

const digest = (securityKey, uri) => {
    var hmac256 = crypto.createHmac('sha256', securityKey);
    hmac256.update(uri);
    return hmac256.digest('hex');
};

const client = rest
                .wrap(mime, {
                    mime: 'application/json'
                })
                .wrap(timeout, {
                    timeout: 10e3
                })
                .wrap(errorCode)
                .wrap(translateResponse);

export default function(uri, { data = {}, baseUrl = ServerUrl, headers = {}, method = 'POST', session = {} } = {}) {
    if (!uri) {
        return Promise.reject();
    }

    let { accessKeyId, securityKeyId, realIp } = session;
    const datetime = new Date();
    headers = _.extend({}, {
        'Datetime': datetime.toISOString()
    }, headers);
    if (realIp != null) {
        headers['X-Ido85-Client-IP'] = realIp;
    }
    if (securityKeyId != null) {
        if (Env !== 'production' && securityKeyId === 'TEST AUTH') {
            headers = _.extend({
                Authorization: securityKeyId
            }, headers);
        }
        else {
            const signature = digest(securityKeyId, `${method}/${uri}${datetime.toISOString()}`);
            headers = _.extend({
                Authorization: `${accessKeyId}:${signature}`
            }, headers);
        }
    }

    const requestObj = {
        path: `${baseUrl}${uri}`,
        method: method,
        headers: headers,
        entity: data
    };

    return client(requestObj)
            .then(resp => {
                const request = _.pick(resp.request, 'headers', 'method', 'entity', 'path', 'data');
                const { headers, entity, _entity, error } = resp;

                logger.info('request finished', {
                    url: request.path,
                    request: _.omit(request, 'path'),
                    response: {
                        headers,
                        entity,
                        _entity,
                        error
                    }
                });
                return resp;
            })
            .catch(error => {
                logger.error('request failed', {
                    requestUrl: requestObj.path,
                    error: _.omit(error, 'raw')
                });
                return error;
            });
}
