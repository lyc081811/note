import { User } from '../datas/';

/**
 * 加载用户信息的 middleware，在用户登录后使用 User#getUserInfo 获取用户信息并覆盖 session.user
 *
 * @author 85ido-fe-generator
 */
const loadUser = function(req, res, next) {
    if (req.xhr === false && req.session.user != null && (!req.originalUrl.endsWith('.map'))) {
        const userData = new User(req.session);
        userData.getUserInfo()
            .then(user => {
                req.session.user = user;
                next();
            })
            .catch(error => {
                next();
            });
        return;
    }
    next();
};

export { loadUser }

export default loadUser
