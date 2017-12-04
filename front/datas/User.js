import { APIBase } from './';
import request from '../services/request';
import { Errors } from '../services/constants';

/**
 * 用户相关的接口
 *
 * @author 85ido-fe-generator
 */
export class User extends APIBase {
    /**
     * 用户登录
     */
    login({ username, password }) {
        let user = {};
        if (username != null) {
            user.username = new Buffer(username).toString('base64');
        }
        if (password != null) {
            user.password = new Buffer(password).toString('base64');
        }

        return Promise.reject({
            message: 'Method unsupport: dataService.User#login.'
        });
        /*
        在 Url 确定后可以使用这段代码完成和后端的交互
        return request('your url', {
            headers: {
                Authorization: `${user.username}:${user.password}`
            }
        }).then(resp => {
            if (resp.entity) {
                const { result, error } = resp.entity;
                if (error) {
                    return Promise.reject(error);
                }
                return result;
            }
            return Promise.reject('未返回数据');
        });
        */
    }

    /**
     * 获取用户基本信息，在 middlewares/loadUser 中会被使用到
     */
    getUserInfo () {
        return Promise.reject({
            message: 'Method unsupport: User#getUserInfo.'
        });
    }
}
