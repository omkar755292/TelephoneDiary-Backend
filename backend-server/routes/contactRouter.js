//Importing all necessary dependancy
const express = require('express');
const { getContacts, createContact, deleteContact } = require('../controller/contactController');

const contactRouter = express.Router(); //creating contact router

//defining all routes
contactRouter.route('/').get(getContacts);
contactRouter.route('/').post(createContact);
contactRouter.route('/:id').delete(deleteContact);

module.exports = contactRouter;