import express from 'express';
import { User } from '../datas/';
import setRememberMe from '../services/setRememberMe';
let router = express.Router();

router.post('/login', (req, res, next) => {
    const { rememberMe } = req.body;
    const user = new User(req.session);

    user.login(req.body)
        .then(result => {
            if (result != null) {
                const { accessKeyID, accessSecurityKey, loginDate } = result;

                req.session.accessKeyId = accessKeyID;
                req.session.securityKeyId = accessSecurityKey;
                req.session.user = true;
                setRememberMe(rememberMe, req);

                res.send({
                    result: {
                        loginDate
                    }
                });
            }
        })
        .catch(error => {
            res.send({
                error
            });
        });
});

router.get('/logout', (req, res) => {
    req.session.destroy(err => {
        res.redirect('/login');
    });
});

export default router;
