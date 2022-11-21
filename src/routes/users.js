const { Router } = require("express");
const router = Router();
const uploads = require("../models/uploads");

router.get("/my-images", async (req, res) => {
  try {
    let { id } = req.user;
    let images = await uploads.find({ userID: id });

    res.json({
      error: false,
      message: "Images fetched successfully.",
      images: images,
      status: 200,
    });
  } catch (err) {
    next({
      status: 500,
      message: err.message,
      send: false,
    });
  }
});

module.exports = router;
