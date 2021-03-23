import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';

function PieProgressBar({chartGoal}) {

    //algorithm to collect all users true values
        let actionArray = []
        let actionComplete = []   
        let milestoneArray = []
        let milestoneComplete = []
        let totalTrueCompletes = 0
        
        chartGoal.milestones.forEach( function (milestone) {
            
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

            if (milestone.actionItems.length === 0){
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
        })

        console.log("totalTrueCompletes", totalTrueCompletes)
        console.log("totalStepsPerGoal", chartGoal.totalStepsPerGoal)

        //equation to get users progress
        const percentage = (((totalTrueCompletes) /  (chartGoal.totalStepsPerGoal)) * 100)

        console.log(percentage);
        
    return (
        <div style={{width: "200px"}}>
            <CircularProgressbar value={percentage} text={`${percentage}%`} />
        </div>
        
    );
}
        
export default PieProgressBar;

