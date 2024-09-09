const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

// @desc 전체 연락처 가져오기
// @route GET /contacts
const getAllContacts = asyncHandler(async (req, res) => {
    const contact = await Contact.find();  
    //res.status(200).send(contact); 
    res.render("getAll-1"); // views/getAll-1.ejs 파일을 전송해 줌.
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
    const updateContact = await Contact.findByIdAndUpdate(
        id,
        {name, email, phone},
        {new: true} //수정한 후의 도큐먼트로 반환해 주는 옵션
    );
    res.status(200).send( updateContact );
});

// @desc 연락처 삭제하기
// @route DELETE /contacts/:id
const deleteContact = asyncHandler(async (req,res) => {
    //res.status(200).send(`연락처 삭제하기 ID:${req.params.id}`);
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("연락처를 찾지 못함.(ID없음)");
    }
    await Contact.deleteOne();
    res.status(200).send("연락처 삭제됨.");
});

module.exports = { 
    getAllContacts, 
    createContact,
    getContact,
    updateContact,
    deleteContact
 };