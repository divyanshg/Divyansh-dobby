const dotnev = require("dotenv");

dotnev.config();

const startServer = require("./app");

const port = process.env.PORT || 3000;

startServer(port).then((app) => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
