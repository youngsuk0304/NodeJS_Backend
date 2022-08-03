"use strict"; //엄격모드를 의미하며 이코마 스크립트 문법을 준수하겠다고 명시 해주는것. js파일 위에 넣는다.

//모듈
//express 모듈을 이용한 서버 열기
const express = require("express");//require이라는 명령어로 express라는 모듈을 다운
const app = express();//변수 app안에 express() 넣어주고 

//라우팅
//우리가 만든 js파일을 require해서 불러오게 만드는 코드
const home = require("./routes/home");

app.set("views","./views");//set("화면 views를 만들고","그 views가 있는 폴더의 위치")

//코드를 어떤 엔진으로 해석할지 지정
//우리는 view engin으로 ejs라는것을 사용
app.set("view engine","ejs")

app.use("/",home);//use()는 미들웨어를 등록해주는 메서드

module.exports=app;

//서비스 개발을 할때는 MVC패턴을 주로 이용하나  
//MVP, MTV .. 다양한 설계 패턴이 존재
//그중 MVC 패턴을 이용하여 개발 할 계획 
