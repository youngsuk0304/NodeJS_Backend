import express from 'express';
import mysql from 'app';
import *as api from '/src/api/GetAPI.js';
import {default as dotenv} from 'dotenv'

//const express = require("express");//require이라는 명령어로 express라는 모듈을 다운
//const mysql = require("./app");

dotenv.config({path:'/.env'});//.env 파일 찾아서 환경변수 설정
const app=express();

app.use(express.json({
    limit:'50mb'
}));

app.listen(3000,()=>{
    console.log("Server start.port 3000");
});

app.get("/adminIdPw", async (req,res)=>{
    const admin_info = await mysql.query('adminIdPw');
    console.log(admin_info);
    res.send(admin_info);
});

let 변수 = 

app.post("/insert_user_bio_info", async (req,res)=>{
    const result = await mysql.query('insert_user_bio_info',req.body.param);
    console.log(result);
    res.send(result);
});

app.put('/update',async (req,res)=>{
    const result = await mysql.query('customerUpdate', req,body.param);
    res.send(rewult);
});
//sequelizer은 MySQL, MariaDB, MS SQL 등의 데이터베이스를 위한 promise 기반 Node.js ORM 도구. ORM은 Object Relational Mapping의 약자로 객체와 관계형 데이터베이스의 데이터를 맵핑해 주는 것을 말한다. 
//쉽게말해 Node.js에서 구현한 자바스크립트 객체와 데이터베이스인 MySQL의 데이터를 매핑해서 별도의 쿼리문 작성 없이 데ㅣ터베이스의 데티러를 손쉽게 조작할 수 있또록 해주는 도구.
