//설명 

//express 모듈을 설치하기 위해서
//npm install express --save 를 터미널에 입력
//위의 명령어를 수행해주면 node_modules라는 dir과 package-lock.json, package.json 파일이 다운로드 되며
//node_modules에서 express라는 모델과 express모델을 사용하기 위해 필요한 다른것들까지 설치되는것을 확인 가능

//서버 실행 - 프로그램을 실행(node app.js)하면 listen(포트번호)해당 포트로 서버가 열린다.
//서버 종료법 - 가끔 종료가 제대로 되지 않아서 port가 계속 사용되는 경우가 있다.
//이럴때는 cmd 창에 netstat -ano | findstr LISTEN 를 입력후 해당 port가 사용되고 있는 pid를 찾아
//taskkill /f /pid pid번호 를 입력해주면 해당 포트사용을 중지 할 수 있다.


////프레임 워크를 사용하지 않고 서버 열어보기  
// const http = require("http");
// const app = http.createServer((req,res)=>{
//   console.log(req.url)//req.url을 사용하면 사용자가 url에 입력된 root 값을 가져올 수 있다. 예) http://localhost:3001/login 입력시 터미널에 /login 이 입력되는것을 확인 가능

//   //문제 1 . http로 보내주기 때문에 한글이 깨지는 문제가 발생하기 때문에 아래와 같이 설정이 필요!!
//   res.writeHead(200,{"Content-Type" : "text/html; charset=utf-8"});

//   if(req.url==='/'){
//     res.end("여기는 루트 입니다.")
//   }
//   // app.get("/",(req,res)=>{
//   //   //기능
//   //   res.send("여기는 루트")
//   // });
//   else if(req.url ==="/login"){
//     res.end("여기는 로그인 화면 입니다.")
//   }
// });
// //root경로를 설정해주지 않으면 http로 가동된 서버는 아무 화면이 뜨지 않고 빙글빙글 뜨기만 한다.

// app.listen(3001,()=>{
//   console.log("http로 가동된 서버 입니다.");
// });

//express 모듈을 이용한 서버 열기
const express = require("express");//require이라는 명령어로 express라는 모듈을 다운
const app = express();//변수 app안에 express() 넣어주고 

//view 엔진 세팅(앱 세팅)
//express처럼 ejs 엔진을 사용하기 위해선 
//npm install ejs --save를 해서 설치 해줘야한다.

app.set("views","./views");//set("화면 views를 만들고","그 views가 있는 폴더의 위치")

//코드를 어떤 엔진으로 해석할지 지정
//우리는 view engin으로 ejs라는것을 사용
app.set("view engine","ejs")

//아무 경로 없이 app.listen을 실행시킬경우 Cannot GET/ 으로 root를 경로를 찾을수 없다는 표시가 뜬다.
//그래서 app.get()을 사용하여 경로를 정해줘야한다.
app.get("/",(req,res)=>{
  res.render("home/index")
});

// //html 부분을 아래와 같이 넣어서 사용하면 지저분 하기 때문에 html 부분을 login.ejs파일로 만들어 views폴더에 넣어 사용가능
// app.get("/login",(req,res)=>{
//   res.send(`<!DOCTYPE html>
//   <html lang="ko">
//     <head>
//       <meta charset="UTF-8">
//       <meta http-equiv="X-UA-Compatible" content="IE=edge">
//       <meta name="viewport" content="width=device-width, initial-scale=1.0">
//       <title>Document</title>
//     </head>
//     <body>
//       <input type="text" placeholder="아이디"><br>
//       <input type="text" placeholder="비밀번호"><br>
//       <button>로그인</button>
//     </body>
//   </html>`)
// });
// //그러면 아래와 같이 html 부분을 없애고 사용 가능

app.get("/login",(req,res)=>{
  res.render("home/login")
});

app.listen(3000,()=>{
  console.log("서버 가동")
});//3000번 포트로 열어달라 


