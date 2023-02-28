const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.set('strictQuery', false);

mongoose.connect('mongodb://127.0.0.1:27017/bb-test-db');

const PhotoSchema = new Schema({
  title: String,
  description: String,
});

const Photo = mongoose.model('Photo', PhotoSchema);

// Photo.create({
//   title: 'Photo Title 2',
//   description: 'Photo description 2',
// });

Photo.find({}, (err, data) => {
  console.log(data);
});
