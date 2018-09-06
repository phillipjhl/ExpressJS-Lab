const express = require('express');
const path = require('path');
const fs = require('fs');
const bP = require('body-parser');
const app = express();

app.use(bP.urlencoded({extended: false}));

app.post('/contact-form', (req, res) => {
    console.log(req.body.email);
    console.log(req.body.name);
    res.send('Thank You!');
});

//middleware url logger
// app.use((req, res, next) => {
    //     console.log(req.originalUrl);
    //     next();
    // });
    
app.use(express.static(path.join(__dirname, '../public')));

app.listen(3000);