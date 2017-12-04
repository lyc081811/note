/*
 * 将Server返回的JSON格式化为JSON RPC格式
 *
 * @author 85ido-fe-generator
 */
import interceptor from 'rest/interceptor';

import { Errors } from './constants';

/**
 * 将返回的Response格式转换成JSON RPC格式。
 * @param {Object} response Response from server
 * @return {Object} Response with translated
 */
const translateResponse = response => {
    let { entity, error } = response;
    response._entity = entity;
    let newEntity;

    // 请求超时
    if (error === 'timeout') {
        newEntity = Errors.Timeout;
    }
    else if (entity != null) {
        let { code, result: { retCode, retMsg }, data } = entity;
        if (typeof data === 'string') {
            data = {
                _rawData: data
            };
        }

        // 当Server返回的代码不为200时，替换Http Status Code，生成Entity
        if (code !== 200) {
            response.raw.response.statusCode = code;
        }

        // 业务返回成功，直接将data作为result，丢弃retMsg
        if (retCode === 0) {
            newEntity = {
                result: data
            };
        }
        // 业务返回不成功，将result和data包装到error中
        else {
            newEntity = {
                error: {
                    code: retCode,
                    message: retMsg,
                    data: data
                }
            };
        }
    }

    response.entity = newEntity;
    return response;
};

export default interceptor({
    success(response) {
        return translateResponse(response);
    },
    error(response) {
        return Promise.reject(translateResponse(response));
    }
});
