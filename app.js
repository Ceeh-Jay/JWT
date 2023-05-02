require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();


const notFoundMiddleware = require('./middleware/not-found');
const errorMiddleware = require('./middleware/error');

//middleware
app.use(express.static('./public'));
app.use(express.json());




app.use(notFoundMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
    try {
        app.listen(port, console.log(`Server is listening on port ${port}...`));
    } catch(err) {
        console.log(err);
    }
}

start();