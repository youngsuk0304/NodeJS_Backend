"use strict"
//UserStorage에서 데이터를 받아 처리해야 하기때문에 
const UserStorage = require("./UserStorage");

class User{
  constructor(body){
    this.body=body;
  }
  login(){
    const client = this.body;
    const {id, psword} = UserStorage.getUserInfo(client.id);
    //const {id, psword, ... 필요한 정보 추가} = UserStorage.getUserInfo(body.id);

    //console.log(id,psword);
    if(id){
      if(id ===client.id &&psword===client.psword){
        return {success : true, msg:"로그인 성공"};
      }
      return {success:false, msg:"비밀번호가 틀렸습니다."};
    }
    return {success:false, msg:"존재하지 않는 아이디입니다."};
  }
  register(){
    const client = this.body;
    const response = UserStorage.save(client);
    return response;
  }
}

module.exports=User;