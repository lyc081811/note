import request from '../services/request';
import _ from 'underscore';
import { ServerUrl } from '../services/constants';

export const RouterMappings = [
    {
        router: /.*/,
        target: ServerUrl
    }
];

const getServerUrl = (url) => {
    const router = RouterMappings.find(routerMapping => {
        const { router, target } = routerMapping;
        if (router instanceof RegExp) {
            return router.test(url);
        }
        else {
            return router === url;
        }
    });
    if (router == null) {
        return ServerUrl;
    }
    return router.target;
};

/**
 * API的基类
 *
 * @author 85ido-fe-generator
 */
export class APIBase {
    constructor(ctx) {
        this.ctx = ctx;
    }

    makeRequest(url, data, options) {
        return request(url, _.extend({
            data: data,
            session: this.ctx,
            baseUrl: getServerUrl(url)
        }, options))
            .then(res => {
                if (res.entity) {
                    const {result, error} = res.entity;
                    if (error) {
                        return Promise.reject(error);
                    }
                    return result;
                }

                return Promise.reject('未返回数据');
            });
    }
}
