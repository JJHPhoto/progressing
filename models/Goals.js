const mongoose = require("mongoose");
const moment = require("moment");
const Schema = mongoose.Schema;

const GoalSchema = new Schema({
    date: {
        type: Date,
        default: new Date().toISOString()
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
    startDate: Date,
    endDate: Date,
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

GoalSchema.virtual("daysLeft").get( function () {
    let start = moment(this.startDate);
    let end = moment(this.endDate);

    return end.diff(start, "days");
})

GoalSchema.virtual("daysLeftHalf").get( function () {
    let start = moment(this.startDate).format("DDD");
    let end = moment(this.endDate).format("DDD");

    console.log("start", start);
    console.log("end", end);

    return (end-start)/2;
})

// daily goals, take all false milestone with steps and divide equally based off enddate

module.exports = Goals = mongoose.model("Goals", GoalSchema);

