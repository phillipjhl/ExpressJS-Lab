const express = require('express');
const path = require('path');
const fs = require('fs');
const bP = require('body-parser');
const router = express.Router();
const app = express();

app.use(bP.urlencoded({extended: false}));

app.post('/contact-form', (req, res) => {
    let info = {
        name: req.body.name,
        email: req.body.email
    }
    fs.writeFileSync(path.join(__dirname, '../Info.json'), JSON.stringify(info));
    res.send('Thank You!');
});

app.get('/formsubmissions', (req, res) => {
    res.sendFile(path.join(__dirname, '../Info.json'));
});

//middleware url logger
// app.use((req, res, next) => {
    //     console.log(req.originalUrl);
    //     next();
    // });
    
app.use(express.static(path.join(__dirname, '../public')));

app.listen(3000);