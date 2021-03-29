import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Chart from "../../components/Chart";
import "./style.css";

function GoalCarousel({chartGoal, setGoals, checkCompleteStatus, handleDeadlineNotice, deleteGoal}) {
  const [index, setIndex] = useState(0);

  console.log('carousel', index)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  let renderObjects = chartGoal.reverse(chartGoal.date);

  console.log("Carousel Component: renderObjects is all goals", renderObjects);

  return (
    
    <Carousel fade className="p-0 d-block h-100 mb-5 mt-4" interval={null} activeIndex={index} onSelect={handleSelect} >

    {renderObjects.map(obj => {
        return (
          <Carousel.Item key={obj.id}>
            <Chart chartGoal={obj} 
            setGoals={setGoals} 
            checkCompleteStatus={checkCompleteStatus} 
            handleDeadlineNotice={handleDeadlineNotice}
            deleteGoal={deleteGoal}
            />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default GoalCarousel;
