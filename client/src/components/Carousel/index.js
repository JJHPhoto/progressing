import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Chart from "../../components/Chart";
import "./style.css";

function GoalCarousel(props) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  let renderObjects = props.chartGoal;

  console.log(renderObjects);

  return (
    
    <Carousel fade className="p-0 goalCarousel mt-4" interval={null} activeIndex={index} onSelect={handleSelect} >

    {renderObjects.map(obj => {
        return (
          <Carousel.Item>
            <Chart chartGoal={obj} />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default GoalCarousel;
