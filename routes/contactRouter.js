//Importing all necessary dependancy
const express = require('express');
const { getContacts, createContact, deleteContact } = require('../controller/contactController');
const validateToken = require('../middleware/validateToken');

const contactRouter = express.Router(); 

contactRouter.use(validateToken);
contactRouter.route('/').get(getContacts);
contactRouter.route('/').post(createContact);
contactRouter.route('/:id').delete(deleteContact);

module.exports = contactRouter;