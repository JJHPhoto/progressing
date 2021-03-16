const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

require("./config/connect");
// require("dotenv").config();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const passport = require("passport");

// app.use(passport.initialize());
// // Passport config
// passport.use(require("./config/jwtPassportStrategy"));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// app.use("/api", require("./routes/authentication"));

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

//Need to add Mongo DB connection here

app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
