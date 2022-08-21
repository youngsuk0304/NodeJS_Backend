import fetch from 'node-fetch';

var user_bio_info={
  member_diastolic_blood_pressure : null,
  member_systolic_blood_pressure : null,
  member_bpm :null,
  member_stress_level :null,
  member_stress_value :null
};

const Bp_url = "http://210.104.190.229:8381/v19blood/list?";
const Stress_url = "http://210.104.190.229:8381/v19Stress/list?";
const Bpm_url = "http://210.104.190.229:8381/v19heart/list?";


function callApi(){
  fetch(Bp_url + new URLSearchParams({
    "memberSeq":parseFloat("2345")  ,
    "startDay": 1660618500000,
      "endDay": 1660618800000
  }),
  {
      headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMzM5IiwiZXhwIjoxNjYzMzMxMDg0fQ.QOf-gLZuySGR8MygYUZ6aiEr9xpCTvGZweVaobvw5ObpeB4TYfWD5FbCT4esWKrcPnjNbC6J1ztHkQ8JKa00qw"
      },
  }).then((response) => response.json())
  .then((data) => {
    console.log('bp성공',data);
    bi_info.member_diastolic_blood_pressure=JSON.stringify(data.min[0].diastolic);
    bi_info.member_systolic_blood_pressure=JSON.stringify(data.max[0].systolic)
    console.log("diastolic : ",bi_info.member_systolic_blood_pressure);
    console.log("systolic : ",bi_info.member_diastolic_blood_pressure);
  })
  .catch((error) => {
    console.error('실패:', error);
  });


  fetch(Bpm_url + new URLSearchParams({
    //"memberSeq": 2345,
    "startDay": 1660610500000,
    "endDay": 1660618800000
  }),
  {
      headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyMzQ1IiwiZXhwIjoxNjYzNTIzNzMyfQ.4GbsyFBmJdc69LCwGsklBWn-JY3C_Cu19ec7NHcGgbtGLtUVWdGQAHWCAi7bzkuW7XJsZbeiq-IKAf8bydzgjg"
      },
  }).then((response) => response.json())
  .then((data) => {
    console.log('bpm 성공');
    bi_info.member_bpm=JSON.stringify(data.list[0].bpm);
    console.log("bpm : ",bi_info.member_bpm);
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
    console.log('stress 성공:',data);
    bi_info.member_stress_level=JSON.stringify(data.list[0].stressLevel);
    bi_info.member_stress_value=JSON.stringify(data.list[0].stressValue);
    console.log("stress_level : ",bi_info.member_stress_level);
    console.log("stress_value : ",bi_info.member_stress_value);
  })
  .catch((error) => {
    console.error('실패:', error);
  });
}
setInterval(callApi, 1000);

export default user_bio_info;