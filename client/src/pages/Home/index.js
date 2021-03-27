/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Header } from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import "./style.css";
import goalAPI from "../../utils/goalApi";
import GoalCarousel from "../../components/Carousel";
import ProgFooter from "../../components/Footer";
// import Goal from "../../components/Goal";
import { Container } from "react-bootstrap";

function Home() {
  // State to display goals
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    loadGoals();
  }, []);

  console.log("Home Page: goals state", goals);

  const loadGoals = (req, res) => {
    goalAPI
      .getGoals(res)
      .then((res) => {
        setGoals(res.data);
        console.log("Home Page: res.data", res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="container">
        <NavBar />
        <Header />
        {/* <div className="goalcard"> */}
        <GoalCarousel chartGoal={goals} />
        {/* </div> */}
        {/* <Goal chartGoal={goals}/> */}
      </div>
      <ProgFooter />
    </div>
  );
}

export default Home;
