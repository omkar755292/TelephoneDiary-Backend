const contactModel = require("../models/contactModel");
const asyncHandler = require('express-async-handler')
//@desc: Get all Contact
//@method: GET /api/contact
//@access: Public
const getContacts = asyncHandler(async(req, res)=>{
    const getcontacts = await contactModel.find();
    res.status(200).json(getcontacts);
})

//@desc: Create New Contact
//@method: POST /api/contact
//@access: Public
const createContact = asyncHandler(async(req, res)=>{
    const {name, email, phone} = req.body;
    if (!name || !email || !phone) {
        throw new Error('All filds are mandatory');
    }
    const createcontact = await contactModel.create(req.body);
    res.status(201).json(createcontact);
})

//@desc: Delete Contact by Id
//@method: DELETE /api/contact/:Id
//@access: Public
const deleteContact = asyncHandler(async(req, res)=>{
    const getcontact = await contactModel.findById(req.params.id);
    if (!getcontact) {
        throw new Error('Contact Not Found');
    }
    const deletecontact = await contactModel.findByIdAndDelete(req.params.id)
    res.status(200).json(deletecontact);
})

module.exports = {getContacts, createContact, deleteContact}