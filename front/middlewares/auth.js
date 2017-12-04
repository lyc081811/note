import { Errors } from '../services/constants';

/**
 * 生成需要登录后访问的middleware
 *
 * @param {Object} options middleware用到的参数
 * @param {string} options.returnUrl 未登录时跳转的Url，默认为 /login
 * @param {string} options.userKey 检查属性是否存在session中，默认 user
 * @return {Function} middleware
 *
 * @author 85ido-fe-generator
 */
const auth = function({
    returnUrl = '/login',
    userKey = 'user'
} = {}) {
    return function(req, res, next) {
        const { xhr, originalUrl, session } = req;
        const user = session[userKey];

        if (user == null) {
            if (xhr) {
                res.send(Errors.UnAuth);
            }
            else {
                res.redirect(`${returnUrl}?redirectUrl=` + encodeURIComponent(originalUrl));
            }
            return;
        }
        next();
    };
};

export { auth }

export default auth
