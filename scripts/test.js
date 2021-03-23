const goal = 
    {
    title: "Learn to play guitar",
    description: "I want to learn to play guitar as a creative outlet",
    goaltype: "event",
    milestones: [
        {
        name: "Learn to read guitar tabs",
        actionItems: [],
        complete: true
      }, 
      {
        name: "Establish a practice routine",
        actionItems: [
            {
                name: "something random 1",
                complete: true
            }, 
            {
                name: "something random 2",
                complete: true
            },
            {
                name: "something random 3",
                
            }   
          ],
          complete: true
      }
    ],
    user_id: process.env.USER_ID,
  }

 function getSteps() { let totalStepsPerGoal = 0;
    goal.milestones.forEach( function (milestone) {
        if ( milestone.actionItems ) {
            totalStepsPerGoal = totalStepsPerGoal + milestone.actionItems.length;
        } 
        if (milestone.actionItems.length == 0){
            totalStepsPerGoal = totalStepsPerGoal + 1;
        }
    })
    console.log("totalStepsPerGoal", totalStepsPerGoal);
 }

getSteps();

function getTrue() {

let actionArray = []
let actionComplete = []

let milestoneArray = []
let milestoneComplete = []

let totalTrueCompletes = 0

goal.milestones.forEach( function (milestone) {

    if(milestone.actionItems) {
        actionArray.push(milestone.actionItems)
        var merged = [].concat.apply([], actionArray);

        merged.forEach(function(item) {
            let {complete} = item
            actionComplete.push(complete);
        }
        )
    
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

}

getTrue();

