//Importing all necessary dependancy
const express = require('express');
const env = require('dotenv');
const cors = require('cors');
const contactRouter = require('./routes/contactRouter');
const connectDB = require('./config/connectionDB');
const errorHandler = require('./middleware/errorHandler');

env.config(); //configuring hostname and port form .env file
const hostname = process.env.HOSTNAME || 'localhost';
const port = process.env.PORT || 5000;

connectDB(); //connecting to mongoDB 
const app = express();

//settingup middleware and router
app.use(express.json());
app.use(cors());
app.use('/api/contact', contactRouter);
app.use(errorHandler);

//starting server
app.listen(port, (req, res) => {
    console.log(`server listening on port http://${hostname}:${port}`);
});