import express from 'express';
import { Manage } from '../datas';
const router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index');
});


router.get('/manage', function (req, res, next) {
    res.render('projectManage/manage');
});
router.post('/project', function (req, res, next) {
    const project = new Manage(req.session);
    const param = req.body;
    project.getAllProject(param).then(projects => {
        res.send({ result: projects });
    });
});


router.get('/login', (req, res) => {
    res.render('user/login');
});

export default router;
