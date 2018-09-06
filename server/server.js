const express = require('express');
const path = require('path');
const app = express();

//middleware logger
app.use((req, res, next) => {
    console.log(req.originalUrl);
    next();
});

app.use(express.static(path.join(__dirname, '../public')));

app.listen(3000);