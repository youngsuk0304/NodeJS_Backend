"use strict"; //엄격모드를 의미하며 이코마 스크립트 문법을 준수하겠다고 명시 해주는것. js파일 위에 넣는다.

const express = require("express");
//app이 아닌 router을 사용한다
const router = express.Router();

//그래서 app.get()을 사용하여 경로를 정해줘야한다.
// app.get("/",(req,res)=>{
//   res.render("home/index")
// });
//하지만 파일을 따로 빼주면서 app이 아닌 router 로 사용 
router.get("/",(req,res)=>{
  res.render("home/index")
});

router.get("/login",(req,res)=>{
  res.render("home/login")
});

//router를 외부파일에서 사용할 수 있도록 던져주는 부분
module.exports = router;