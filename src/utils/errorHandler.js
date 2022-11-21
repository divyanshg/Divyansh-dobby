module.exports = function (err, req, res, next) {
  const errorStatus = err.status || 500;
  const errorMessage = err.message;
  const errorToBeSent = err.send;

  let message = errorToBeSent ? errorMessage : "Internal server error";

  console.log(err);

  if (!errorToBeSent)
    console.log(`Error: ${errorStatus} - ${JSON.stringify(errorMessage)}`);

  return res.status(errorStatus).json({
    error: true,
    message,
    status: errorStatus,
  });
};
