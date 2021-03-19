const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const goalSchema = new Schema({
    date: {
        type: Date,
        default: new Date().toDateString("en-US")
    },
    complete: {
        type: Boolean,
        default: false
    },
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
            complete: {
                type: Boolean,
                default: false
            },
            actionItems: [
                {
                    name: String,
                    complete: {
                        type: Boolean,
                        default: false
                    },
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
