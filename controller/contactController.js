const contactModel = require("../models/contactModel");
const asyncHandler = require('express-async-handler')

//@desc: Get all Contact
//@method: GET /api/contact
//@access: Public
const getContacts = asyncHandler(async(req, res)=>{
    const contacts = await contactModel.find({user_id: req.user.id});
    res.status(200).json(contacts);
})

//@desc: Create New Contact
//@method: POST /api/contact
//@access: Public
const createContact = asyncHandler(async(req, res)=>{
    const {name, email, phone} = req.body;
    if (!name || !email || !phone) {
        throw new Error('All filds are mandatory');
    }
    const contact = await contactModel.create({
        name,
        email,
        phone,
        user_id: req.user.id
    });
    res.status(201).json(contact);
})

//@desc: Delete Contact by Id
//@method: DELETE /api/contact/:Id
//@access: Public
const deleteContact = asyncHandler(async(req, res)=>{
    const contact = await contactModel.findById(req.params.id);
    if (!contact) {
        throw new Error('Contact Not Found');
    }
    if(contact.user_id!=req.user_id){
        throw new Error("User Doesnot allow to access anather contact");
    }
    const deletecontact = await contactModel.findByIdAndDelete(req.params.id)
    res.status(200).json(deletecontact);
})

module.exports = {getContacts, createContact, deleteContact}