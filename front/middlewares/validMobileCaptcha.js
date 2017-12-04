import moment from 'moment';

import { ErrorCodes } from '../services/constants';
import { ValidInterval } from '../services/appConstants';

/**
 * 在 request 上扩展验证手机验证码的方法
 *
 * @author 85ido-fe-generator
 */
const validMobileCaptcha = function(req, res, next) {
    req.validMobileCaptcha = (obj = req.body) => {
        const { mobileCaptcha:mobileCaptcha } = req.session;
        if (obj.sms_code != mobileCaptcha.smsCode) {
            return {
                error: {
                    code: ErrorCodes.InvalidParams,
                    message: '短信验证码错误'
                }
            };
        }
        if (obj.mobile !== mobileCaptcha.mobile) {
            return {
                error: {
                    code: ErrorCodes.InvalidParams,
                    message: '手机号与接收验证码的手机号不同'
                }
            };
        }

        let now = new Date().getTime();
        if (now - moment(mobileCaptcha.smsTime).toDate().getTime() > ValidInterval) {
            return {
                error: {
                    code: ErrorCodes.InvalidParams,
                    message: '短信验证码已过期，请重新获取'
                }
            };
        }
        return null;
    };
    next();
};

export { validMobileCaptcha }

export default validMobileCaptcha
