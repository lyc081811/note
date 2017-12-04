import moment from 'moment';

/**
 * 设置session有效时间为一周
 *
 * @param {Boolean} isRemember 登录时是否选中了“下次自动登录”
 * @param {Object} req 请求对象
 * @param {Object} req.session session对象
 *
 * @author 85ido-fe-generator
 */
export default function(isRemember, req) {
    if (isRemember != true) {
        return;
    }

    let afterAWeek = moment().add(1, 'weeks').toDate();
    if (req.session != null) {
        req.session.cookie.expires = afterAWeek;
        req.session.cookie.maxAge = Math.abs(moment().diff(afterAWeek));
    }
}
