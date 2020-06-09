//Inicilaizimi i express 

const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./databaza/db');

//middleware
app.use(cors());
connectDB();

const port = process.env.PORT  || 5000;

app.listen(port, ()=> console.log(`Duke degjuar ne portin ${port}`))