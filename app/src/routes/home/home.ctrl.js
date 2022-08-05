"use strict"



const output={
  home:(req, res) =>{
    res.render("home/index");
  },
  
  login:(req, res) =>{
    res.render("home/login");
  },
};

const users={
  id:["서영석","강성규","허정","방선주"],
  psword:["1234","1111","4444","2222"],
};

// login.js의 fetch()에서 POST하는 데이터를 받아 오는 부분
const process={//web화면에서 id와 pw에 입력한 데이터 받아옴
  login:(req,res)=>{
    //console.log(req.body);//login.js fetch()에서 body로 데이터를 전달 해주기 때문에 req.body로 받아와야한다.
    const id = req.body.id,
    psword=req.body.psword;
    //console.log(id,psword);
    if (users.id.includes(id)){
      const idx= users.id.indexOf(id);
      if(users.psword[idx]===psword){
        return res.json({
          success : true,
        });
      }
    }
    return res.json({
      success:false,
      msg: "로그인에 실패하셨습니다.",
    });
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