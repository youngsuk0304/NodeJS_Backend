import fetch from 'node-fetch';
import user_info from './Get_user_info.js';
import * as mysql from '../../app.js';

var user_bio_info={
  member_seq:null,
  member_bpm :null,
  member_stress_level :null,
  member_stress_value :null,
  member_diastolic_blood_pressure : null,
  member_systolic_blood_pressure : null,
  //info_time:null,
};

const Bp_url = "http://210.104.190.229:8381/v19blood/list?";
const Stress_url = "http://210.104.190.229:8381/v19Stress/list?";
const Bpm_url = "http://210.104.190.229:8381/v19heart/list?";
const nowtime =Date.now()-2086400000;
async function callApi(){

  console.log("Get_user_bio_info");
  
  user_bio_info.member_seq=await user_info.member_seq;
  //info_time=1660618500;
  fetch(Bp_url + new URLSearchParams({
    "memberSeq":parseFloat("2345")  ,
    "startDay": nowtime,
      "endDay": nowtime+1000000000//1660618800000
  }),
  {
      headers: {
          "Content-Type": "application/json",
          "Authorization": await user_info.member_token
      },
  }).then((response) => response.json())
  .then((data) => {
    console.log('bp성공');
    user_bio_info.member_diastolic_blood_pressure=data.min[0].diastolic;
    user_bio_info.member_systolic_blood_pressure=data.max[0].systolic;
  })
  .catch((error) => {
    console.error('실패:', error);
  });


  fetch(Bpm_url + new URLSearchParams({
    //"memberSeq": 2345,
    "startDay": nowtime,
    "endDay": nowtime+100000000000
  }),
  {
      headers: {
          "Content-Type": "application/json",
          "Authorization": await user_info.member_token
      },
  }).then((response) => response.json())
  .then((data) => {
    console.log('bpm 성공');
    user_bio_info.member_bpm=data.list[0].bpm;
  })
  .catch((error) => {
    console.error('실패:', error);
  });


  fetch(Stress_url + new URLSearchParams({
    //"memberSeq": 2345,
    "dte": 1660575600000
  }),
  {
      headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMzM5IiwiZXhwIjoxNjYzMzMxMDg0fQ.QOf-gLZuySGR8MygYUZ6aiEr9xpCTvGZweVaobvw5ObpeB4TYfWD5FbCT4esWKrcPnjNbC6J1ztHkQ8JKa00qw"
          //"Authorization" :  "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMzQ1IiwiZXhwIjoxNjYzNTIzOTUwfQ.Zb1Hsh5E4uQc6XlQVu3wvOY8mvkvR9Li0DV3kZrW6ndvHO32Xsf661y7sJbs4Svbr5z62osIGyrYa14b2Pm4Vw"      
        },
  }).then((response) => response.json())
  .then((data) => {
    console.log('stress 성공:');
    user_bio_info.member_stress_level=data.list[0].stressLevel;
    user_bio_info.member_stress_value=data.list[0].stressValue;
  })
  .catch((error) => {
    console.error('실패:', error);
  });
  console.log(user_bio_info);

  mysql.query('insert_user_bio_info',user_bio_info);
}

setInterval(callApi, 3000);

export default user_bio_info;