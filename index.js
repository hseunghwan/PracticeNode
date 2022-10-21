const express = require('express') //다운받은 express 모듈을 가져옴
const app = express() //express app생성
const port = 5000  

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://seunghwan:qaqg3200@practicenode.qmip1z4.mongodb.net/?retryWrites=true&w=majority', {
    //useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false // 몽구스 버전 6이상부터는 디폴트 설정되어있어 옵션 추가시 오류 발생함
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))

app.get('/', (req, res) => {   //루트 디렉토리에 hello world 츨력
  res.send('Hello World!~~야호')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`) //app이 listen을 하면 listen중인 port를 출력
})

