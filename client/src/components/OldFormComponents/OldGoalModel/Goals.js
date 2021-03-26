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
    endDate: Date,
    steps: [ 
        {
            name: { type: String},
            complete: {
                type: Boolean,
                default: false
            },
            steps: [
                {
                    name: { type: String},
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
}, {
    toJSON: { virtuals: true }
});

GoalSchema.virtual("totalStepsPerGoal").get( function () {
    let totalStepsPerGoal = 0;
    this.milestones.forEach( function (milestone) {
        if ( milestone.actionItems ) {
            totalStepsPerGoal = totalStepsPerGoal + milestone.actionItems.length;
        } 
        if (milestone.actionItems.length === 0){
            totalStepsPerGoal = totalStepsPerGoal + 1;
        }
    })
    return totalStepsPerGoal;
});

GoalSchema.virtual("totalTrueCompletes").get( function () {
    let totalTrueCompletes = 0
    let actionArray = []
    let actionComplete = []
    let milestoneArray = []
    let milestoneComplete = []

    this.steps.forEach( function (step) {
        if(step.steps) {
            actionArray.push(step.steps)
            var merged = [].concat.apply([], actionArray);
            merged.forEach(function(item) {
                let {complete} = item
                actionComplete.push(complete);
            })
                var trueActionComplete = actionComplete.filter(function(complete) {
                return complete === true;
            })
            totalTrueCompletes = totalTrueCompletes + trueActionComplete.length
        }
        if (step.steps.length === 0){
            milestoneArray.push(step);
            milestoneArray.forEach(function(step) {
                let {complete} = step
                milestoneComplete.push(complete);
            })
                var trueMilestoneComplete = milestoneComplete.filter(function(complete) {
                return complete === true;
            })
           return totalTrueCompletes = totalTrueCompletes + trueMilestoneComplete.length;
        }
        console.log("totalTrueCompletes", totalTrueCompletes)
    })
});

// module.exports = Goals = mongoose.model("goals", GoalSchema);
