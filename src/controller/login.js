const jwt = require("../utils/jwt");
const Users = require("../models/users");
const bcrypt = require("bcrypt");

module.exports = async function (req, res, next) {
  if (req.isAuthenticated) {
    return next();
  }

  try {
    let { email, password } = req.body;
    //find user in db

    let user = await Users.findOne({
      email,
    });

    if (!user) {
      next({
        status: 404,
        message: "User not found",
        send: true,
      });
    }

    //compare password
    let isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      next({
        status: 403,
        message: "Invalid credentials",
        send: true,
      });
    }

    //generate token

    //delete password from user object
    user.password = undefined;

    let accessToken = await jwt.sign({
      id: user._id,
      email: user.email,
      name: user.name,
    });

    res
      .json({
        error: false,
        message: "User logged in successfully.",
        status: 200,
        accessToken,
      })
      .end();
  } catch (err) {
    console.log(err);
    next({
      status: 500,
      send: false,
      message: "Internal Server Error",
    });
  }
};
