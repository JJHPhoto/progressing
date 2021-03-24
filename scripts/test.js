const goal = 
    {
    title: "Learn to play guitar",
    description: "I want to learn to play guitar as a creative outlet",
    goaltype: "event",
    steps: [
        {
        name: "Learn to read guitar tabs",
        steps: [],
        complete: true
      }, 
      {
        name: "Establish a practice routine",
        steps: [
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
    goal.steps.forEach( function (step) {
        if ( step.steps ) {
            totalStepsPerGoal = totalStepsPerGoal + step.steps.length;
        } 
        if (step.steps.length == 0){
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

goal.steps.forEach( function (step) {

    if(step.steps) {
        actionArray.push(step.steps)
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
    if (step.steps.length == 0){
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

}

getTrue();

function GoalList() {

// let milestoneObj = []
// let actionItemName= []

    console.log("single goal", goal);
        // milestoneObj.push(step);
        // console.log("milestoneObjt", milestoneObj) 
        // console.log(step.steps)
        console.log("goalSteps", goal.steps.length)
    // })
}


 // const [actionItem, setActionItem] = useState([]);

    // let milestoneObj = []
  
    // chartGoal.milestones.forEach( function (milestone) {
    
        // if(milestone.actionItems) {
        //     milestoneObj.push(milestone);
        //     console.log("milestoneObjt", milestoneObj) 
            
        //     // var actionItemMerge = [].concat.apply([], milestoneObj);
    
        //     // console.log("actionItem", actionItemMerge)
            
        //     // setActionItem(actionItemMerge);
        // }   
        
        
    // }) 

GoalList();



{/* {goals.milestones.map(milestone => {
            return ( 
              <h2>{milestone.name}
                <ActionItemList chartGoal={goals}/>
              </h2>
           )
           })} 
           <ActionItemList chartGoal={goals}/>  */}