const mongoose = require("mongoose");

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/progressing",
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
})
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.log(err));