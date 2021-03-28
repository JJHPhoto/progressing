import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function PieProgressBar({ chartGoal}) {

  // equation to get users progress
  const percentage = Math.round(
    (chartGoal.totalTrueCompletes / chartGoal.totalStepsPerGoal) * 100
  )

  return (
    <>
      <div style={{ width: "260px" }}>
        <CircularProgressbar
          className="mb-4"
          value={percentage}
          text={`${percentage}%`}
        />
      </div>
    </>
  );
}

export default PieProgressBar;
