/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Header } from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import "./style.css";
import GoalCarousel from "../../components/Carousel";
import ProgFooter from "../../components/Footer";
import { Container } from "react-bootstrap";
import API from "../../utils/API";
import {useAuthenticatedUser} from "../../utils/auth";
import NoGoalsCard from "../../components/NoGoalsCard";

function Home() {
  // State to display goals
  const [goals, setGoals] = useState([]);

  const user = useAuthenticatedUser();

  console.log("user", user._id);

  console.log(goals);

  useEffect(() => {
    loadGoals(user._id);
  }, [user._id]);

  console.log("Home Page: goals state", goals);

  const loadGoals = (req, res) => {
    console.log(req, res);
    API
      .lookup(req)
      .then((res) => {
        setGoals(res.data.goalsSet);
        console.log("Home Page: res.data", res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="container">
        <NavBar />
        <Header />
        {goals.length === 0 ? <NoGoalsCard />:
        <GoalCarousel chartGoal={goals} setGoals={setGoals} />
        }
        
      </div>
      <ProgFooter />
    </div>
  );
}

export default Home;
