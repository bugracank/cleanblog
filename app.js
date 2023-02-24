const express = require('express');
const ejs = require('ejs');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  // res.sendFile(path.resolve(__dirname, './views/index.ejs'));
  res.render('index.ejs');
});
app.get('/addphoto', function (req, res) {
  // res.sendFile(path.resolve(__dirname, './views/index.ejs'));
  res.render('addPhoto.ejs');
});

app.listen(3000);
