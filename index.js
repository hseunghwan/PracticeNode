const express = require('express') //다운받은 express 모듈을 가져옴
const app = express() //express app생성
const port = 5000  
//const bodyParser = require('body-parser'); //req.body 에 정보가 담길 수 있게 해줌 , 
//업데이트 후 express에 기본적을 포함된다고 함
const { User } = require("./models/User");

//application/x-www-form-urlencoded -> 이런 데이터를 분석해서 가져옴
//app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());

//application/jason -> 이런 데이터를 분석해서 가져옴
//app.use(bodyParser.json()); 
app.use(express.urlencoded({extended: true}));


const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://seunghwan:qaqg3200@practicenode.qmip1z4.mongodb.net/?retryWrites=true&w=majority', {
    //useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false // 몽구스 버전 6이상부터는 디폴트 설정되어있어 옵션 추가시 오류 발생함
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))

app.get('/', (req, res) => {   //루트 디렉토리에 hello world 츨력
  res.send('Hello World!~~야호')
})

app.post('/register', (req, res) => {
    //회원 가입 할때 필요한 정보들을 client에서 가져오면
    //그것들을 데이터 베이스에 넣어준다.


    const user = new User(req.body) 
    /* req.body 생김새
        {
        id: "hello"
        password: "123"
        }   */

    user.save((err, userInfo) => {
        if(err) return res.json({ succcess: false, err})
        return res.status(200).json({
            success: true
        })
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`) //app이 listen을 하면 listen중인 port를 출력
})

