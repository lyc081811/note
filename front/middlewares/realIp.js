/**
 * 获取 Client 的真实 IP，服务通过反向代理服务器代理后需要设置 'X-Real-IP' 头。
 *
 * 使用该中间件，服务器必须使用 IPv4 方式启动： `app.listen(port, '0.0.0.0')`。
 *
 * @param {Object} options middleware 参数
 * @param {string} [options.storeKey=session] 真实 IP 存放的对象。
 * @return {Function} middleware
 *
 * @author 85ido-fe-generator
 */
function realIp({
    storeKey = 'session'
} = {}) {
    return function(req, res, next) {
        const store = req[storeKey]
        if (store != null) {
            store.realIp = req.get('X-Real-IP') || req.ip;
        }
        next();
    };
}

export { realIp }

export default realIp
