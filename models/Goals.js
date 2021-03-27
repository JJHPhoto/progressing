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
    endDate: String,
    steps: [ 
        {
            id: Number,
            name: { type: String},
            complete: {
                type: Boolean,
                default: false
            },
        }
    ],
    user_id: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    notes: String,
}, {
    toObject: { virtuals: true },
    toJSON: { virtuals: true }
}
);

GoalSchema.virtual("totalStepsPerGoal").get( function () {
    let totalStepsPerGoal = this.steps.length;
    
    console.log("totalStepsPerGoal", totalStepsPerGoal);
    return totalStepsPerGoal;
});

GoalSchema.virtual("totalTrueCompletes").get( function () {
let milestoneComplete = []

if (this.steps){
        this.steps.forEach(function(step) {
            let {complete} = step
            milestoneComplete.push(complete);
        })
    
        var trueMilestoneComplete = milestoneComplete.filter(function(complete) { 
        return complete === true;     
        })
        
        let totalTrueCompletes = trueMilestoneComplete.length;
        console.log("totalTrueCompletes", totalTrueCompletes)
        return totalTrueCompletes 
    }
});   


// date virtual, how much time is left
// take end date and subtract by current date 
// potential calendar

// daily goals, take all false milestone with steps and divide equally based off enddate

module.exports = Goals = mongoose.model("Goals", GoalSchema);
