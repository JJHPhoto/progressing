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
        if (milestone.actionItems.length == 0){
            totalStepsPerGoal = totalStepsPerGoal + 1;
        }
    })
    return totalStepsPerGoal;
});


// GoalSchema.virtual("totalAllMilestonesActions").get( function () {
//     let totalAllMilestonesActions = 0;
//     this.milestones.forEach( function (milestone) {
//         if ( milestones.actionItems.length > 0 ) {
//             totalAllMilestonesActions += //add the sum of whatever the total actions are and the validatedMilestones
//         }
//     })
// });

// GoalSchema.virtual("trueMilestoneActions").get( function () {
//     let trueMilestoneActions = 0;
//     this.milestones.forEach( function (milestone) {
//         if ( milestone.actionItems.length > 0 ) {
//            trueMilestoneActions += 

//             //add up the total of all true action steps and the total of all true validatedMilestones
//         } else {
//             totalStepsPerGoal = totalStepsPerGoal + 1;
//         }
//         console.log("milestones", milestones)
//     })
//     return totalStepsPerGoal;
// });

//date virtual, how much time is left
//take end date and subtract by current date 
//potential calendar

//daily goals, take all false milestone with steps and divide equally based off enddate


// GoalSchema.virtual("goalSummary").get( function () {
//     let goalSummary = 0;
//     this.milestones.forEach( function (milestone) {
//         if ( milestones.actionItems.length > 0 ) {
//             //take the trueMilestoneActions and divide by totalAllMilestoneActions
//     })
// });


module.exports = Goals = mongoose.model("goals", GoalSchema);
