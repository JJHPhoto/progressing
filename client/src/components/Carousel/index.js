import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Chart from "../../components/Chart";
import "./style.css";

function GoalCarousel(props)  {
    
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  let renderObjects = props.chartGoal;

  console.log(renderObjects);
    
  return (
    <Carousel className="bg-dark mt-4" interval={null} activeIndex={index} onSelect={handleSelect} style={{height: "220px"}}>

    {renderObjects.map(obj => {

        return (
            <Carousel.Item>
                <Chart chartGoal={obj} />        
            </Carousel.Item>
        )
    })}     

    </Carousel>
    
  );
}

export default GoalCarousel;
