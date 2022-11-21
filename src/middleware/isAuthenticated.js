const jwt = require("../utils/jwt");

async function isAuthenticated(req, res, next) {
  const accessToken = req.cookies.accessToken;
  if (!accessToken) {
    next({
      status: 401,
      message: "Unauthorized",
      send: true,
    });
  }
  try {
    const decoded = await jwt.verify(accessToken);
    req.isAuthenticated = true;
    req.user = decoded;
    next();
  } catch (err) {
    next({
      status: 401,
      message: "Unauthorized",
      send: true,
    });
  }
}

module.exports = isAuthenticated;
