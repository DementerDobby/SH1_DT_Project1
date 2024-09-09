//몽구스 모듈 설치 - 몽고DB 접속을 처리하는 모듈
//npm i mongoose

const mongoose = require("mongoose");

//몽구스 데이터 타입
//String : 문자열
//Number : 숫자
//Boolean : 불리언
//Date : 날짜
//Array : 배열
//Object : 객체
//Mixed : 혼합된 유형

const contactSchema = new mongoose.Schema(
    {
        name: {
            type: String, //속성값의 타입
            required: true //필수 속성인지 여부
        },
        email: {
            type: String
        },
        phone: {
            type: String,
            required: [true, "전화번호는 꼭 기입해주세요."]
        },
        office: {
            type: String
        }
    },
    {
        timestamps: true //데이터베이스에 연락처 자료를 추가하거나 수정한 시간이 자동으로 기록됨
    }
);

const Contact = mongoose.model("Contact", contactSchema);
module.exports = Contact;
