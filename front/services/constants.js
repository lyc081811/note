import _ from 'underscore';

/**
 * 常量模块，保存用到的常量
 *
 * @module constants
 * @author 85ido-fe-generator
 */

const envConfigs = {
    dev: {
        ServerUrl: 'http://127.0.0.1:8504/'
    },
    prerelease: {
        ServerUrl: 'http://192.168.10.211:3000/'
    },
    production: {
        ServerUrl: 'http://10.144.187.36:8081/'
    }
};

const nodeEnv = process.env.ENV_CONF || 'dev';
const envConfig = envConfigs[nodeEnv];

/**
 * 当前Node执行的环境变量
 * @type {String}
 */
export const Env = process.env.ENV_CONF;

/**
 * 服务端Url，与项目名称组成请求根路径
 * @type {String}
 */
export const ServerUrl = envConfig.ServerUrl;

/**
 * 日志输出目录
 */
export const LogDir = 'logs/';

/**
 * 基于JSON RPC的错误码
 *
 * @type {Object}
 * @prop {Number} ErrorCodes.CaptchaError 验证码错误
 * @prop {Number} ErrorCodes.Timeout 请求后端超时
 * @prop {Number} ErrorCodes.UnAuth 用户未登录错误
 *
 */
export const ErrorCodes = {
    ParseError: -32700,
    InvalidRequest: -32600,
    MethodNotFound: -32601,
    InvalidParams: -32602,
    InternalError: -32603,
    CaptchaError: -32001,
    Timeout: -32002,
    UnAuth: 401
};

/**
 * 常用的错误对象
 *
 * @type {Object}
 * @prop {Object} Errors.Captcha 图片验证码错误
 * @prop {Object} Errors.Timeout 请求服务器超时错误
 * @prop {Object} Errors.UnAuth 用户未登录错误
 * @prop {Object} Errors.InternalError 服务器内部错误
 */
export const Errors = {
    Captcha: {
        code: ErrorCodes.CaptchaError,
        message: '验证码错误，请重新输入'
    },
    Timeout: {
        code: ErrorCodes.Timeout,
        message: '请求服务器超时，请稍后重试'
    },
    UnAuth: {
        code: ErrorCodes.UnAuth,
        message: '请登录后重试'
    },
    InternalError: {
        code: ErrorCodes.InternalError,
        message: '我们的服务出现了一些问题，请稍后重试'
    }
};

export default {
    Env,
    ServerUrl,
    LogDir,
    ErrorCodes,
    Errors
};
