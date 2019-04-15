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

// UPDATE ROUTE
app.put('/humans/:id', (req, res) => {
    Humans[req.params.id] = req.body;
    res.redirect('/humans');
})

// EDIT ROUTE
app.get('/humans/:id/edit', (req, res) => {
    res.render('edit.ejs', {
        Humans: humans[req.params.id],
        id: req.params.id
    })
});

// NEW ROUTE
app.get('/humans/new', (req, res) => {
    res.render('new.ejs');
})

// CREATE ROUTE
app.post('/humans', (req, res) => {
    humans.push(req.body);
    res.redirect('/humans');
});

app.listen(3000, function(){
    console.log("Port is running!")
});


module.exports = app;