const goal = 
    {
    title: "Learn to play guitar",
    description: "I want to learn to play guitar as a creative outlet",
    goaltype: "event",
    steps: [
        {
        name: "Learn to read guitar tabs",
        complete: false
      }, 
      {
        name: "Establish a practice routine",
        complete: false
      },
      {
        name: "Establish a practice routine",
        complete: false
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

function completeFull() {

  let milestoneComplete = []
  let completeFull = false
  
  if (goal.steps){
          goal.steps.forEach(function(step) {
              let {complete} = step
              milestoneComplete.push(complete);
          })

        completeFull = milestoneComplete.every(v => v === true);

        console.log("completeFull", completeFull);

        return completeFull;
      
      }
  }
  
  completeFull();

  function completeHalf() {

    let milestoneComplete = []
    let completeHalf = false
    
    if (goal.steps){
            goal.steps.forEach(function(step) {
                let {complete} = step
                milestoneComplete.push(complete);
            })
            var trueMilestoneComplete = milestoneComplete.filter(function(complete) { 
            return complete === true;     
            })
            
            if ((trueMilestoneComplete.length/milestoneComplete.length) >= .5 && (trueMilestoneComplete.length/milestoneComplete.length) < 1) {
               completeHalf = true
            }
            console.log("completeHalf", completeHalf)
            return completeHalf;
          }
    }
    
    completeHalf();

    function completeFirst() {

      let milestoneComplete = []
      let completeFirst = false
      
      if (goal.steps){
              goal.steps.forEach(function(step) {
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
      }
      
      completeFirst();