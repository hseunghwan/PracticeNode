const mongoose = require('mongoose')


const userSchema = mongoose.Schema({
    name:{
        type: String,
        maxlength: 50
    },
    email:{
        type: String,
        trim: true, //중간에 공백을 없에주는 역할
        unique: 1
    },
    password:{
        type: String,
        maxlength: 50
    },
    lastname:{
        type: String,
        maxlength: 50
    },
    role:{
        type: Number,
        default: 0
    },
    image: String,
    token:{
        type: String
    },
    tokenExp:{  //tokenExperation 토큰 기간
        type: Number
    }
})

const User = mongoose.model('User', userSchema) //스키마를 모델로 감싸줌

module.exports = { User } //이 모델을 다른파일에서도 쓸 수 있도록 모듈로 만들어줌