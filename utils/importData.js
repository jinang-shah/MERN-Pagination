require("dotenv").config();
const fs = require("fs");
const Post = require("../models/Post");
const connectDB = require("../config/db");

connectDB();

const posts = JSON.parse(fs.readFileSync(`${__dirname}/posts.json`, "utf-8"));

const importData = async () => {
  try {
    await Post.create(posts);
    console.log("data import success");
    process.exit(0);
  } catch (error) {
    console.log(`data import error ${error}`);
    process.exit(1);
  }
};

const deleteData = async () => {
  try {
    await Post.deleteMany({});
    console.log("Data deleted successfully");
    process.exit(0);
  } catch (error) {
    console.log(`data deletion error ${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}
