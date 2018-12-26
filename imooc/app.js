const express = require('express')
const port = process.env.PORT || 3001;
var app = express()

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', function(req, res){
    res.render('index', {
        title: 'imooc.demo'
    })
})
app.get('/list/:id', function(req, res){
    res.render('list', {
        title: 'imooc.list'
    })
})
app.get('/detail', function(req, res){
    res.render('detail', {
        title: 'imooc.detail'
    })
})
app.get('/admin', function(req, res){
    res.render('admin', {
        title: 'imooc.admin'
    })
})





app.listen(port);
console.log('server start!')