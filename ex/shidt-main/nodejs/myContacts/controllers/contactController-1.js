const asyncHandler = require("express-async-handler");

// @desc 코드설명 
// @route 메소드와 경로

// @desc 전체 연락처 가져오기
// @route GET /contacts
const getAllContacts = asyncHandler(async (req, res) => {
    res.status(200).send("연락처 페이지");
});

// @desc 새 연락처 추가하기
// @route POST /contacts
const createContact = asyncHandler(async (req, res) => {
    //객체 구조분해할당, key와 value가 동일함.
    const {name, email, phone} = req.body;
    if( !name || !email || !phone ){
        return res.status(400).send("필수값이 입력되지 않음");
    }
    res.status(200).send("새 연락처 추가");
});

// @desc 연락처 상세보기
// @route GET /contacts/:id
const getContact = asyncHandler(async (req,res) => {
    res.status(200).send(`연락처 상세보기 ID:${req.params.id}`);
});

// @desc 연락처 수정하기
// @route PUT /contacts/:id
const updateContact = asyncHandler(async (req,res) => {
    res.status(200).send(`연락처 수정하기 ID:${req.params.id}`);
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