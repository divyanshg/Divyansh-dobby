const jwt = require("../utils/jwt");
const Users = require("../models/users");
const bcrypt = require("bcrypt");

module.exports = async function (req, res, next) {
  try {
    let { email, password, name } = req.body;

    //find user in db

    let user = await Users.findOne({
      email,
    });

    if (user) {
      next({
        status: 403,
        message: "User already exists",
        send: true,
      });
    }

    //generate password hash
    let hashedPassword = await bcrypt.hash(password, 10);

    //create user

    let newUser = await Users.create({
      email,
      password: hashedPassword,
      name,
    });

    //generate token
    //delete password from user object
    newUser.password = undefined;

    let accessToken = await jwt.sign({
      id: newUser._id,
      email: newUser.email,
      name: newUser.name,
    });

    res
      .cookie("accessToken", accessToken, {
        httpOnly: true,
        secure: false,
        maxAge: 1000 * 60 * 60 * 24 * 7,
      })
      .json({
        error: false,
        message: "User registered successfully.",
        status: 200,
      })
      .end();
  } catch (err) {
    console.log(err);
    next({
      status: 500,
      message: err.message,
      send: false,
    });
  }
};
