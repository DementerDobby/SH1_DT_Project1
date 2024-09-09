const express = require("express");
const router = express.Router();

router
    .route("/")
    //모든 연락처 가져오기
    .get((req,res)=>{
        res.status(200).send("연락처 페이지");
    })
    //새 연락처 추가하기
    .post((req,res)=>{
        console.log(req.body);
        const { name, email, phone } = req.body;
        if( !name || !email || !phone ){ //null이거나 empty, undefined인 값을 의미한다.
            return res.status(400).send("필수값이 입력되지 않음.");
        }
        res.status(201).send("연락처 추가하기");
    });

router
    .route("/:id")
    //연락처 상세보기
    .get((req,res)=>{
        res.status(200).send(`연락처 상세보기: ID:${req.params.id}`);
    })
    //연락처 수정하기
    .put((req,res)=>{
        res.status(200).send(`연락처 수정하기: ID:${req.params.id}`);
    })
    //연락처 삭제하기
    .delete((req,res)=>{
        res.status(200).send(`연락처 삭제하기: ID:${req.params.id}`);
    });

module.exports = router;