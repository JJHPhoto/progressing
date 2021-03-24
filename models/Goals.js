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
            name: { type: String},
            complete: {
                type: Boolean,
                default: false
            },
            actionItems: [
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
    let totalStepsPerGoal = 0;
    this.milestones.forEach( function (milestone) {
        if ( milestone.actionItems ) {
            totalStepsPerGoal = totalStepsPerGoal + milestone.actionItems.length;
        } 
        if (milestone.actionItems.length == 0){
            totalStepsPerGoal = totalStepsPerGoal + 1;
        }
    })
    console.log("totalStepsPerGoal", totalStepsPerGoal)
    return totalStepsPerGoal;
});

GoalSchema.virtual("totalTrueCompletes").get( function () {
    let totalTrueCompletes = 0
    let actionArray = []
    let actionComplete = []
    let milestoneArray = []
    let milestoneComplete = []

    this.milestones.forEach( function (milestone) {
        if(milestone.actionItems) {
            actionArray.push(milestone.actionItems)
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
        if (milestone.actionItems.length == 0){
            milestoneArray.push(milestone);
            milestoneArray.forEach(function(milestone) {
                let {complete} = milestone
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

// date virtual, how much time is left
// take end date and subtract by current date 
// potential calendar

// daily goals, take all false milestone with steps and divide equally based off enddate

module.exports = Goals = mongoose.model("goals", GoalSchema);
