const express = require('express');

const app = express();
require('dotenv').config();
require('./dbconfig/dbconfig');


app.use('/api',require('./routes/api'))

app.listen(8080, ()=> {
    console.log("server vivo my boy");
})