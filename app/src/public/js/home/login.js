"use strict"

//DOM -> Document Object Model (문서 객체 모델 ) 
//일종의 인터페이스

const id = document.querySelector("#id");//질의 선택자
const psword = document.querySelector("#psword");//#은 태그의 id의 값 'id'를 의미
//id = 'id'
const loginBtn = document.querySelector("button");

loginBtn.addEventListener("click",login);

function login(){
  const req={
    id : id.value,
    psword : psword.value,
  };
  console.log(req);
}