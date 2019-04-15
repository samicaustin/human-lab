const express = require('express');
const bodyParser = require('body-parser');
const humans = require('./models/humans');
const app = express();

//MIDDLEWARE
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// INDEX ROUTE
app.get('/humans', (req, res) => {
    res.render('index.ejs')
});

// SHOW ROUTE
app.get('')


app.listen(3000, function(){
    console.log("Port is running!")
});


module.exports = app;