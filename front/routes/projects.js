import express from 'express';
import { Manage } from '../datas';
const router = express.Router();

router.post('/project-list', (req, res, next) => {
    const params = req.body;
    const manageData = new Manage(req.session);
    manageData.projectManage(params)
        .then(result => {
            res.json({ result });
        })
        .catch(error => res.json({ error }));
});

export default router;
