//Inicilaizimi i express 

const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan')
const connectDB = require('./databaza/db');

//middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

connectDB();

app.get('/', (req, res)=>{
    res.send('Inside Server');

})

const port = process.env.PORT  || 5000;

app.listen(port, ()=> console.log(`Duke degjuar ne portin ${port}`))