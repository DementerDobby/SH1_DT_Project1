const express = require("express");
const router = express.Router();
const { 
    getAllContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact,
    addContactForm //연락처 추가폼
} 
= require("../controllers/contactController");

// localhost:3000/contacts
router.route("/").get(getAllContacts).post(createContact);
router.get("/add", addContactForm);
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;