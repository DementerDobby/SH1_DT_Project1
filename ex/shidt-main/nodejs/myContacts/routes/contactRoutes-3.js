const express = require("express");
const router = express.Router();
const { 
    getAllContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact
} 
= require("../controllers/contactController");//contactController-3.js

// localhost:3000/contacts
router
    .route("/")
    .get(getAllContacts)
    .post(createContact);

router
    .route("/:id")
    .get(getContact)
    .put(updateContact)
    .delete(deleteContact);

module.exports = router;