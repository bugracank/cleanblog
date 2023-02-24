const express = require('express');
const app = express();

const blog = { id: 1, title: 'Blog title', description: 'Blog description' };

app.get('/', function (req, res) {
  res.send(blog);
});

app.listen(3000);
