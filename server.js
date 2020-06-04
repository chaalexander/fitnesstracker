const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 8000;

const apiRoutes = require("./routes/api");
const htmlRoutes = require("./routes/html");

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.use("/api", apiRoutes);
app.use(htmlRoutes);

mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb://workout:password1@ds229373.mlab.com:29373/heroku_pw1hf3jd",
  {
    useNewUrlParser: true,
  }
);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
