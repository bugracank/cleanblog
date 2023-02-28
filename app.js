const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');
const path = require('path');
const Photo = require('./models/Photo');
const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/bb-test-db');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', async (req, res) => {
  const photos = await Photo.find({});
  res.render('index.ejs', { photos });
});

app.get('/addphoto', function (req, res) {
  res.render('addPhoto.ejs');
});

app.post('/photos', async (req, res) => {
  await Photo.create(req.body);
  res.redirect('/');
});

app.listen(3000);
