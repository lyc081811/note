const mongoose = require('mongoose')
const DB_URL = 'mongodb://127.0.0.1:27017/immoc-chat'
mongoose.connect(DB_URL, function(err){
    if(!err) {
        console.log('connect success')
    }
})
const models = {
    user: {
        'user': {
            type: String,
            require: true
        },
        'pwd': {
            type: String,
            require: true
        },
        'type': { // 1-> boss   2->大牛
            type: Number,
            require: true
        },
        'desc': {
            type: String,
            require: true
        }
    },
    chat: {}
}

for (let i in models) {
    mongoose.model(i, new mongoose.Schema(models[i]))
}
module.exports = {
    getModel: name => {
        return mongoose.model(name)
    }
}
