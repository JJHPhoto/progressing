const goal = 
    {
    title: "Learn to play guitar",
    description: "I want to learn to play guitar as a creative outlet",
    goaltype: "event",
    steps: [
        {
        name: "Learn to read guitar tabs",
        complete: true
      }, 
      {
        name: "Establish a practice routine",
        complete: false
      },
      {
        name: "Establish a practice routine",
        complete: true
      }
    ],
    user_id: process.env.USER_ID,
  }



   function getSteps() { 
    let totalStepsPerGoal = goal.steps.length;
    
    console.log("totalStepsPerGoal", totalStepsPerGoal);
 }

getSteps();

function getTrue() {

let milestoneComplete = []

if (goal.steps){
        goal.steps.forEach(function(step) {
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
}

getTrue();


getSteps();

function getTrue() {

let milestoneComplete = []

if (goal.steps){
        goal.steps.forEach(function(step) {
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
}

getTrue();