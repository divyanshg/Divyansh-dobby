const { Router } = require("express");

const router = Router();

const loginController = require("../controller/login");
const registerController = require("../controller/register");
const logoutController = require("../controller/logout");

//login route
router.post("/login", loginController);

//register route
router.post("/register", registerController);

//logout route
router.get("/logout", logoutController);

module.exports = router;
