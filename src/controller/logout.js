module.exports = async function (req, res, next) {
  try {
    //remove the cookie
    res.clearCookie("accessToken").end();
  } catch (err) {
    next({
      status: 500,
      message: err.message,
      send: false,
    });
  }
};
