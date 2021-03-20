const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GoalSchema = new Schema({
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
            type: String,
            complete: {
                type: Boolean,
                default: false
            },
            actionItems: [
                {
                    type: String,
                    complete: {
                        type: Boolean,
                        default: false
                    },
                }
            ]
        }
    ],
    user_id: String,
    notes: String,
}, 
// {
//     toJSON: { virtuals: true }
// }

console.log("in the schema")
);

module.exports = Goals = mongoose.model("goals", GoalSchema);
