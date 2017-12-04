/**
 * 项目中打印日志的配置
 *
 * @author 85ido-fe-generator
 */
import winston from 'winston';
import dailyRotateFile from 'winston-daily-rotate-file';

import { LogDir } from './constants';

let logger = new winston.Logger({
    level: 'info',
    transports: [
        new winston.transports.Console(),
        new dailyRotateFile({
            filename: `${LogDir}/info.log`,
            prepend: true
        })
    ]
});

export default logger;
