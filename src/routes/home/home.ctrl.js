"use strict"

const home=(req, res) =>{
  res.render("home/index");
}

const login=(req, res) =>{
  res.render("home/login");
}

//모듈을 밖으로 빼주기 함수의 return 같은 느낌
module.exports ={
  home,
  login,
}

//설명 
//오브젝트에서 일반적으로 
//{key:value}형태를 사용한다.
//하지만 위 처럼 key만 입력 해줄 경우
//아래와 같이 key와 value가 같은 값으로 설정
// {
//   hello : hello,
//   lonin : login,
// } 