const express = require('express');
const bodyParser = require('body-parser');
const humans = require('./models/humans');
const methodOverride = require('method-override')
const app = express();

//MIDDLEWARE
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(methodOverride(`_method`));

// INDEX ROUTE
app.get('/humans', (req, res) => {
    Humans = humans;
    res.render('index.ejs')
});

// SHOW ROUTE
app.get('')

// DELETE ROUTE
app.delete('/humans/:id', (req, res) => {
    humans.splice(req.params.id, 1);
    res.redirect('/humans');
    console.log("delete route hit")
});


app.listen(3000, function(){
    console.log("Port is running!")
});


module.exports = app;