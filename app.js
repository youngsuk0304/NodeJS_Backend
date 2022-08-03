"use strict"; //엄격모드를 의미하며 이코마 스크립트 문법을 준수하겠다고 명시 해주는것. js파일 위에 넣는다.
//설명 

//express 모듈을 설치하기 위해서
//npm install express --save 를 터미널에 입력
//위의 명령어를 수행해주면 node_modules라는 dir과 package-lock.json, package.json 파일이 다운로드 되며
//node_modules에서 express라는 모델과 express모델을 사용하기 위해 필요한 다른것들까지 설치되는것을 확인 가능

//view 엔진 세팅(앱 세팅)
//express처럼 ejs 엔진을 사용하기 위해선 
//npm install ejs --save를 해서 설치 해줘야한다.

//서버 실행 - 프로그램을 실행(node app.js)하면 listen(포트번호)해당 포트로 서버가 열린다.
//서버 종료법 - 가끔 종료가 제대로 되지 않아서 port가 계속 사용되는 경우가 있다.
//이럴때는 cmd 창에 netstat -ano | findstr LISTEN 를 입력후 해당 port가 사용되고 있는 pid를 찾아
//taskkill /f /pid pid번호 를 입력해주면 해당 포트사용을 중지 할 수 있다.

//모듈
//express 모듈을 이용한 서버 열기
const express = require("express");//require이라는 명령어로 express라는 모듈을 다운
const app = express();//변수 app안에 express() 넣어주고 

//라우팅
//우리가 만든 js파일을 require해서 불러오게 만드는 코드
const home = require("./routes/home");

const PORT=3000;

app.set("views","./views");//set("화면 views를 만들고","그 views가 있는 폴더의 위치")

//코드를 어떤 엔진으로 해석할지 지정
//우리는 view engin으로 ejs라는것을 사용
app.set("view engine","ejs")


app.use("/",home);//use()는 미들웨어를 등록해주는 메서드

//위의 코드로 인해 /routes/home에 있는 index.js 파일을 읽고 실행해준다.

app.listen(PORT,()=>{
  console.log("서버 가동")
});//3000번 포트로 열어달라 


