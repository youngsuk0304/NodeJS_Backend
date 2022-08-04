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
  
  //console.log(req);
  //console.log(JSON.stringify(req));


  fetch("/login",{  //내가 전달 하려는 데이터의 형식을 알려줘야한다.
    method : "POST",
    headers:{
      "Content-Type": "application/json",  //데이터 타입 명시 "application/json"
    },
    body : JSON.stringify(req),
  });//위와 같이 설정하면 /login이라는 경로에 POST라는 메소드로 데이터르 받을 수 있는 api가 있어야 한다.
  //두번째 파라미터로 전달할 데이터를 보내줄 수 있다.
  //이때 데이터의 형식은 object 여야 한다
  //JSON이라는 형식으로 데이터를 전송 할예정이기 때문에 req를 JSON 형식으로 감싸주어야 한다.
  // JSON.stringify(req)
  //이때 stringify는 object를 문자열로 바꿔주는 메소드
  //body를 통해 데이터를 전달할 때는 http메서드 중에서
  //POST라는것이 존재하며 POST라는 메서드를 통해  데이터를 전달 해주어야 한다.
  //이러한것이 REST API에 관련된 것들
}