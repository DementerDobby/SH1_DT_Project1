const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

// @desc 전체 연락처 가져오기
// @route GET /contacts
const getAllContacts = asyncHandler(async (req, res) => {
    const contact = await Contact.find();  //sql: select * from table;
    res.status(200).send(contact); //JS KV객체 => JSON문자열로 변환되어 전송됨.
});

// @desc 새 연락처 추가하기
// @route POST /contacts
const createContact = asyncHandler(async (req, res) => {
    //객체 구조분해할당, key와 value가 동일함.
    const {name, email, phone} = req.body;
    if( !name || !email || !phone ){
        return res.status(400).send("필수값이 입력되지 않음");
    }
    const contact = await Contact.create({
        name,
        email,
        phone
    });
    res.status(200).send("새 연락처 추가");
});

// @desc 연락처 상세보기
// @route GET /contacts/:id
const getContact = asyncHandler(async (req,res) => {
    //const contact = await Contact.findById(req.params.id);

    //파라미터로 name을 보내서 조건에 맞는 연락처을 응답한다.
    //localhost:3000/contacts/hong
    const name = req.params.id;
    const contact = await Contact.findOne({name : name});
    res.status(200).send(contact);
});

// @desc 연락처 수정하기
// @route PUT /contacts/:id
const updateContact = asyncHandler(async (req,res) => {
    //res.status(200).send(`연락처 수정하기 ID:${req.params.id}`);
    const id = req.params.id;
    const { name, email, phone } = req.body;
    const contact = await Contact.findById(id);
    if(!contact) {
        res.status(404);
        throw new Error("연락처를 찾지 못함.(ID에 맞는 데이터 없음)");
    }
    //수정 데이터 설정(문서객체 업데이트)
    contact.name = name;
    contact.email = email;
    contact.phone = phone;
    //저장
    contact.save();

    res.status(200).json( contact );
});

// @desc 연락처 삭제하기
// @route DELETE /contacts/:id
const deleteContact = asyncHandler(async (req,res) => {
    res.status(200).send(`연락처 삭제하기 ID:${req.params.id}`);
});

module.exports = { 
    getAllContacts, 
    createContact,
    getContact,
    updateContact,
    deleteContact
 };