import express from 'express';
import { Manage } from '../datas';
const router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index');
});


router.get('/manage', function (req, res, next) {
    res.render('projectManage/manage');
});


router.get('/login', (req, res) => {
    res.render('user/login');
});

export default router;
