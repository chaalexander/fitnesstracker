// requiring dotenv 
require("dotenv").config();

// importing internal node packages
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const app = express();


// importing local files
const apiRoutes = require("./routes/api");
const htmlRoutes = require("./routes/html");

app.use(logger("dev"));

// parser middlewear
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// static folder
app.use(express.static("public"));

//  api routes
app.use("/api", apiRoutes);
app.use(htmlRoutes);

// Port
const PORT = process.env.PORT || 8000;

// connection with database local and cloud
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
});

// Listener
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
