const mongoose = require("mongoose");
const moment = require("moment");
const Schema = mongoose.Schema;

const GoalSchema = new Schema({
    date: {
        type: Date,
        default: new Date().toISOString()
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

GoalSchema.virtual("completeFull").get( function () { 
    let milestoneComplete = []
    let completeFull = false
    if (this.steps){
            this.steps.forEach(function(step) {
                let {complete} = step
                milestoneComplete.push(complete);
            })
            completeFull = milestoneComplete.every(v => v === true);
            return completeFull;
      }
    });   

GoalSchema.virtual("completeHalf").get( function () {
    let milestoneComplete = []
    let completeHalf = false
    if (this.steps){
            this.steps.forEach(function(step) {
                let {complete} = step
                milestoneComplete.push(complete);
            })
            var trueMilestoneComplete = milestoneComplete.filter(function(complete) { 
            return complete === true;     
            })
            if ((trueMilestoneComplete.length/milestoneComplete.length) >= .5 && (trueMilestoneComplete.length/milestoneComplete.length) < 1) {
               completeHalf = true
            }
            return completeHalf;
          }
    });
    
GoalSchema.virtual("completeFirst").get( function () {
    let milestoneComplete = []
      let completeFirst = false
      if (this.steps){
              this.steps.forEach(function(step) {
                  let {complete} = step
                  milestoneComplete.push(complete);
              })
              var trueMilestoneComplete = milestoneComplete.filter(function(complete) { 
              return complete === true;     
              })
              if ((trueMilestoneComplete.length) === 1 ) {
                 completeFirst = true
              }
              console.log("completeFirst", completeFirst)
              return completeFirst;
            }
    }); 

GoalSchema.virtual("daysLeft").get( function () {
    let current = new Date();
    let curr = moment(current).format("DDD");
    let start = moment(this.date).format("DDD");
    let end = moment(this.endDate).format("DDD");

    console.log("curr - start", curr - start);
    console.log("end - start", end - start);
    console.log("(end - curr) + 1", (end - curr) + 1)

    if((curr - start) < 0) {
        console.log("Inside the if")
        return (end - start);
    }
    else {
        console.log("Inside the else")
        return ((end - curr) + 1);
    }
})

GoalSchema.virtual("daysLeftHalf").get( function () {
    let start = moment(this.startDate).format("DDD");
    let end = moment(this.endDate).format("DDD");

    return (end-start)/2;
})

module.exports = Goals = mongoose.model("Goals", GoalSchema);

