const dotenv = require("dotenv");
dotenv.config();

const express = require("express");

const cors = require("cors");
const app = express();

const cookieParser = require("cookie-parser");

const userRoutes = require("./routes/user.routes");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/users", userRoutes);

module.exports = app;
