const jsonwebtoken = require("jsonwebtoken");

module.exports = {
  sign: (payload) => {
    return jsonwebtoken.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
  },
  verify: (token) => {
    return jsonwebtoken.verify(token, process.env.JWT_SECRET);
  },

  decode: (token) => {
    return jsonwebtoken.decode(token, process.env.JWT_SECRET);
  },
};
