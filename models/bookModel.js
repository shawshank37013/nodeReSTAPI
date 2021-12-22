const mongoose = require("mongoose");

// destructuring to pull schema out of mongoose
const {Schema} = mongoose;

// create the bookModel
const bookModel = new Schema(
   {
    title: {type: String},
    author: {type: String},
    genre: {type: String},
    read: {type: Boolean, default: false},
   }
);

module.exports = mongoose.model('Book', bookModel);