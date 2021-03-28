import React, { useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
// import MessageHalf from "../MessageHalf"

function PieProgressBar({ chartGoal }) {
  // const [visible, toggleVisible] = useState(false);

  // equation to get users progress
  const percentage = Math.round(
    (chartGoal.totalTrueCompletes / chartGoal.totalStepsPerGoal) * 100
  );

  //  const toggleNotification = () => {
  //           toggleVisible(!visible)
  //           return;
  //         }

  //         if (percentage === 100) {
  //           toggleNotification()
  //         }

  return (
    <>
      {/* <div>{visible ? <MessageHalf visible={visible} toggleVisible={toggleVisible}/> : null}</div> */}
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
