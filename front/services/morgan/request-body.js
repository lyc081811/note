import morgan from 'morgan';

morgan.token('request-body', req => JSON.stringify(req.body));
