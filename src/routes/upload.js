const { Router } = require("express");
const router = Router();
const uploadController = require("../controller/upload");

const multer = require("multer");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    let name = req.user.id + "-" + Date.now() + "-" + file.originalname;
    req.body.filename = name;
    cb(null, name);
  },
});
var upload = multer({ storage: storage });

router.post("/image-upload", upload.single("image"), uploadController);

module.exports = router;
