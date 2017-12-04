import morgan from 'morgan';

morgan.token('request-params', req => JSON.stringify(req.params));
