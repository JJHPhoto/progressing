import React from "react";

function GoalList({ chartGoal }) {
  chartGoal.forEach(goal => {

    const milestone = goal.milestones

    function ListItem() {
      let children = null;
      if (milestone.actionItems && milestone.actionItems.length) {
        children = (
          <ul>
            {milestone.actionItems.map(i => (
              <ListItem item={i} key={i.actionItems} />
            ))}
          </ul>
        );
      }

      return (
        <li>
          {milestone.name}
          {children}
        </li>
      );
    }
  })
}

export default GoalList;

