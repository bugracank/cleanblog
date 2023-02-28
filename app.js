const express = require('express');
const ejs = require('ejs');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', function (req, res) {
  res.render('index.ejs');
});
app.get('/addphoto', function (req, res) {
  res.render('addPhoto.ejs');
});
app.post('/photos', function (req, res) {
  console.log(req.body);
  res.redirect('/');
});

app.listen(3000);
