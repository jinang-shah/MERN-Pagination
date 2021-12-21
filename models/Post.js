const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "please provide  a title"],
  },
  author: {
    type: String,
    required: [true, "please provide  a author"],
  },
  body: {
    type: String,
    required: [true, "please provide  a body"],
  },
});


const Post =  mongoose.model('Post',postSchema);

module.exports = Post