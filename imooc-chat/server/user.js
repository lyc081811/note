const express = require('express')

const Router = express.Router()
const model = require('./model')
const User = model.getModel('user')

Router.get('/list', (req, res) => {
    const user = req.query
    User.find(user, (err, doc) => {
        if (!err) {
            return res.json({
                code: 0,
                data: doc
            })
        }
    })
})
// User.create({
//     user: "小七",
//     pwd: "123",
//     type: 1
// },(err,doc) => {
//     if (!err) {
//         console.log(doc)
//     }
// })
Router.post('/add', (req, res) => {
    
    
})


module.exports = Router