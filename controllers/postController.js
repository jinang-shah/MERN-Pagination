const { status } = require("express/lib/response");
const Post = require("../models/Post");

exports.getAllPosts = async (req, res) => {
  try {
    let query = Post.find();

    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * pageSize;
    const total = await Post.countDocuments();

    const pages = Math.ceil(total / pageSize);

    if (page > pages) {
      return res.status(404).json({
        status: "fail",
        message: "Page Not Found",
      });
    }

    query = query.skip(skip).limit(pageSize);

    const result = await query;

    res.status(200).json({
      status: "Success",
      count: result.length,
      page,
      pages,
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "error",
      message: "server error",
    });
  }
};
