
const url = "http://210.104.190.229:8381/";
fetch("http://210.104.190.229:8381/member/login", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    "compSeq": 1, 
    "id": "HI_3",
    "lang": "ko_KR",
    "pw": "Zxcasd123!",
    "sns" : "O"
  }),
}).then((response) => console.log(response));

// fetch('http://210.104.190.229:8381/member/login')
//   .then(res => {
//     // response 처리
//     console.log(res);
//     // 응답을 JSON 형태로 파싱
//     return res.json();
//   })
//   .then(data => {
//     // json 출력
//     console.log(data)
//   })
//   .catch(err => {
//     // error 처리
//     console.log('Fetch Error', err);
//   });

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(res => {
//     // response 처리
//     console.log(res);
//     // 응답을 JSON 형태로 파싱
//     return res.json();
//   })
//   .then(data => {
//     // json 출력
//     console.log(data)
//   })
//   .catch(err => {
//     // error 처리
//     console.log('Fetch Error', err);
//   });