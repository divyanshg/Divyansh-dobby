const Uploads = require("../models/uploads");
var mongoose = require("mongoose");

module.exports = function (req, res, next) {
  try {
    const { filename } = req.body;

    const upload = new Uploads({
      filename: filename,
      name: req.body.name,
      userID: new mongoose.mongo.ObjectId(req.user.id),
    });

    upload.save((err, doc) => {
      if (err) {
        next({
          status: 500,
          message: err.message,
          send: false,
        });
      }
      res.json({
        error: false,
        message: "Image uploaded successfully.",
        status: 200,
      });
    });
  } catch (err) {
    next({
      status: 500,
      message: err.message,
      send: true,
    });
  }
};
