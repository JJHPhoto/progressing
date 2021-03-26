const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
// require("dotenv").config();
const keys = require("../controllers/keys");

const { User } = require("../models");

const opts = {};

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;
// opts.secretOrKey = process.env.JWT_SECRET;

const authorizeJwtToken = (jwtPayload, done) => {
  User.findById(jwtPayload.id)
    // Restrict the data loaded from the user model
    // .select("email")
    .then((user) => {
      if (user) {
        return done(null, user);
      }
      return done(null, false);
    })
    .catch((err) => {
      console.log(err);
      done(null, false);
    });
};

module.exports = new JwtStrategy(opts, authorizeJwtToken);
