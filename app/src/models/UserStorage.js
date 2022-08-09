"use strict";

const fs = require("fs").promises;

//User의 정보 저장된곳
//getUsers를 이용하여 user의 정보를 얻을 수 있다.
class UserStorage{
  static #getUserInfo(data,id){
    const users = JSON.parse(data);
      const idx = users.id.indexOf(id);
      const userKeys = Object.keys(users);//users의 key값만 list로 만든다. ==> [id, psword, name] 형식
      const userInfo=userKeys.reduce((newUser,info)=>{
        newUser[info]=users[info][idx];
        return newUser;
      },{});
      //console.log(userInfo);
      return userInfo;
  }

  static getUsers(...fields){
    //const users = this.#users;
    const newUsers=fields.reduce((newUsers,field)=>{//reduce라는 메소드를 사용하면 fields에서 하나씩 빠져서 newUsers로 넣고 나머지가 field로 들어간다.
      //console.log(newUsers,field);
      if(users.hasOwnProperty(field)){
        newUsers[field]=users[field];
      }
      return newUsers;
    },{});
    return newUsers; 
  }
  //User.js에서 호출
  static getUserInfo(id){
    return fs.readFile("./src/databases/users.json")
    .then((data)=>{      //위의 로직이 성공했을때 실행
      return this.#getUserInfo(data,id);
    })
    .catch(console.error);//위의 로직이 실패 했을때 실행    
  }
  
  
  
  static save(userInfo){
    //const users=this.#users;
    users.id.push(userInfo.id);
    users.name.push(userInfo.name);
    users.psword.push(userInfo.psword);
    return {success:true};
  }
}

module.exports=UserStorage;