require("dotenv").config();

const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

require("./config/connect");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const passport = require("passport");

app.use(passport.initialize());
// Passport config
passport.use( require("./config/jwtPassportStrategy") );

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use( "/api", require("./routes/authentication") );
app.use( "/api/goals", require("./routes/api/goals"))
// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
