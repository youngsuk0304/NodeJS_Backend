import fetch from 'node-fetch';
import user_id_pw from '../../app_mysql.js';
import * as mysql from '../../app.js';

var user_info={
  member_seq :null,
  user_id : null,
  member_name:null,
  member_birth:null,
  member_phone_number:null,
  member_token:null,
};

console.log(user_id_pw.length);
const get_token_url="http://210.104.190.229:8381/login";
var i=0;
//for(let i=user_id_pw.length-1 ; i >=0  ; i--){ 
  console.log("i : ",i);

  console.log("user_id : ",user_id_pw[i].user_id);

  fetch(get_token_url ,{
    method : "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body:JSON.stringify({
      "compSeq": 47, 
      "id":  user_id_pw[i].user_id,
      "lang": "ko_KR",
      "pw":  user_id_pw[i].user_pw,
      "sns" : "O"
    })
  }).then((response) => response.json())
  .then((data) => {
    console.log("i : ",i);
    console.log("user_id : ",user_id_pw[i].user_id);

    user_info.member_seq = data.profile.memberSeq;
    user_info.user_id = user_id_pw[i].user_id;
    user_info.member_name = data.profile.name;
    user_info.member_birth = data.profile.profileInsDate.slice(0,10);
    user_info.member_phone_number = data.profile.phone;
    user_info.member_token = data.token;
    console.log(user_info);
  //console.log(result);
    const result =mysql.query('insert_user_info',user_info)
  })
  .catch((error) => {
      console.error('실패:', error);
  });
//}


export default user_info;