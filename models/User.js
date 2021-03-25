const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
},
  {timestamps: true}
);

UserSchema.virtual('goalsSet', {
  ref: 'Goals',
  localField: '_id',
  foreignField: 'user_id',
});

UserSchema.set('toObject', {virtuals: true});
UserSchema.set('toJSON', {virtuals: true});

module.exports = User = mongoose.model("users", UserSchema);