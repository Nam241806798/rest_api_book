const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const mongodb = require('mongodb');
const bodyparser = require('body-parser');
const routerAuthors = require('./src/routes/author');
const routerBook = require('./src/routes/book')
app.use(express.json());
app.use(bodyparser.json({ limit: '50mb' }));
app.use(cors());
app.use(morgan('common'));


mongoose.connect('mongodb+srv://hoangnam:nam17031998@cluster0.z6yk8.mongodb.net/books?retryWrites=true&w=majority', () => {
	console.log('success');
});

app.use("/v1/Author",routerAuthors)
app.use("/v1/Book",routerBook)
app.listen( 3000,()=>{
	console.log('hello world')
})
