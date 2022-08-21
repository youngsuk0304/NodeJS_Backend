import fetch from 'node-fetch';

var user_info={
  member_seq :null,
  member_phone_num:null,
  member_email:null,
  token:null,
};

const get_token_url="http://210.104.190.229:8381/login";

function callApi(){

  fetch(get_token_url ,{
    method : "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body:JSON.stringify({
      "compSeq": 47, 
      "id": "dothebestmoon1016@gmail.com",
      "lang": "ko_KR",
      "pw": "Hustar1016!",
      "sns" : "O"
    })
  }).then((response) => response.json())
  .then((data) => {
      user_info.member_seq=JSON.stringify(data.profile.memberSeq);
      user_info.member_phone_num=JSON.stringify(data.profile.phone);
      user_info.member_email=JSON.stringify(data.profile.email);
      user_info.token=JSON.stringify(data.token);
      
  })
  .catch((error) => {
      console.error('실패:', error);
  });
}
setInterval(callApi, 1000);

export default user_info;