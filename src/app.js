const express = require("express");
const isAuthenticated = require("./middleware/isAuthenticated");
const connectDb = require("./db");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const AuthRouter = require("./routes/auth");
const UploadRouter = require("./routes/upload");
const UsersRouter = require("./routes/users");

const ErrorHandler = require("./utils/errorHandler");

const startServer = async () => {
  const app = express();

  await connectDb();

  app.use(
    cors({
      origin: ["http://localhost:5173", "https://divyansh-dobby.vercel.app/"],
      credentials: true,
    })
  );
  app.use(cookieParser());
  app.use(express.json());

  app.use("/auth", AuthRouter);

  app.use(isAuthenticated);
  app.use("/uploads", express.static("uploads"));
  app.use("/api", UploadRouter);
  app.use("/api/users", UsersRouter);

  app.use(ErrorHandler);

  return app;
};

module.exports = startServer;
