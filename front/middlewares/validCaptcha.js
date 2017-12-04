/**
 * 在 request 上扩展图片验证码方法
 *
 * @author 85ido-fe-generator
 */
const validCaptcha = function(req, res, next) {
    req.validCaptcha = (obj = req.body) => {
        const { captcha } = obj;
        const { captcha: sessionCaptcha } = req.session;
        return captcha.toUpperCase() === sessionCaptcha;
    };
    next();
};

export { validCaptcha }

export default validCaptcha
