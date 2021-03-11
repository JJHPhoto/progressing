const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const goalSchema = new Schema({
    title: String,
    description: String,
    actions: String
});

const Goals = mongoose.model("Goals", goalSchema);

module.exports = Goals;
