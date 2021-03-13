const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const goalSchema = new Schema({
    date: {
        type: Date,
        default: new Date().toDateString("en-US")
    },
    complete: Boolean,
    title: {
        type: String,
        required: true
    },
    description: String,
    goalType: String,
    endDate: Date,
    milestones: [ 
        {
            name: String,
            complete: Boolean,
            actionItems: [
                {
                    name: String,
                    complete: Boolean
                }
            ]
        }
    ],
    notes: String,
    user_id: String
}, 
// {
//     toJSON: { virtuals: true }
// }
);

const Goals = mongoose.model("Goals", goalSchema);

module.exports = Goals;
