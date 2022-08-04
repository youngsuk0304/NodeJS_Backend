"use strict"

const output={
  home:(req, res) =>{
    res.render("home/index");
  },
  
  login:(req, res) =>{
    res.render("home/login");
  },
};
// login.js의 fetch()에서 POST하는 데이터를 받아 오는 부분
const process={
  login:(req,res)=>{
    console.log(req.body);//login.js fetch()에서 body로 데이터를 전달 해주기 때문에 req.body로 받아와야한다.
  },
};

//모듈을 밖으로 빼주기 함수의 return 같은 느낌
module.exports ={
  output,
  process,
};

//설명 
//오브젝트에서 일반적으로 
//{key:value}형태를 사용한다.
//하지만 위 처럼 key만 입력 해줄 경우
//아래와 같이 key와 value가 같은 값으로 설정
// {
//   hello : hello,
//   lonin : login,
// } 