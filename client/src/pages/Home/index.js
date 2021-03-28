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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Home() {
  // State to display goals
  const [goals, setGoals] = useState([]);

  const user = useAuthenticatedUser();

  useEffect(() => {
    loadGoals(user._id);
  }, [user._id]);

  console.log("Home Page: goals state", goals);

  const loadGoals = (req, res) => {
    API
      .lookup(req)
      .then((res) => {
        setGoals(res.data.goalsSet);
      })
      .catch((err) => console.log(err));
  };

  //Notifications for progress
  const checkCompleteStatus = (res) => {
      console.log("check status full", res.data.completeFull)
      console.log("check status half", res.data.completeHalf)
      console.log("check status first", res.data.completeFirst)


      const percentage = Math.round(
        (res.data.totalTrueCompletes / res.data.totalStepsPerGoal) * 100
      )

    const notifyFirst = () => toast.info('You completed your first step! You can do this! 🙌 ', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
    });

    const notifyHalf = () => toast.warn('You are '+percentage+'% of the way there! Keep it going! 💪', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
    });

    const notifyFull = () => toast.dark('Congrats! You have completed your goal! 💯', {
        position: "top-center",
        autoClose: 10000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        });

    const notifyBadge = () => toast.dark("You've earned a badge! ⭐", {
        position: "top-center",
        autoClose: 10000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        });

    if (res.data.completeFull === true) {
        notifyFull()
        notifyBadge()
        return;
    } else if (res.data.completeHalf === true) {
        notifyHalf()
        return;

    } else if (res.data.completeFirst === true) {
        notifyFirst()
        return;
    }
  }

  //Notifications for deadline

  const handleDeadlineNotice = (value) => {
    let daysLeft = value.target.value;
    let daysLeftHalf = value.target.id

    console.log("daysLeft", daysLeft)
    console.log("daysLeftHalf", daysLeftHalf)

    const notifyDeadlineHalf = () => toast.warning("You are half way from your deadline! You got this! 🎯", {
      position: "top-center",
      autoClose: 10000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      });

    const notifyDeadline = () => toast.dark("You have hit your deadline! You did great! 👍", {
      position: "top-center",
      autoClose: 10000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      });  
    
    if (daysLeft === daysLeftHalf) {
      notifyDeadlineHalf()
      return;
  }
  if (daysLeft === 0) {
    notifyDeadline()
    return;
}
}

  return (
    <div>
      <ToastContainer 
        position="top-center"
        autoClose={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable/>
      <div className="container">
        <NavBar />
        <Header />
        {goals.length === 0 ? <NoGoalsCard />:
        <GoalCarousel chartGoal={goals} 
        setGoals={setGoals} 
        checkCompleteStatus={checkCompleteStatus}
        handleDeadlineNotice={handleDeadlineNotice} />
        }
        
      </div>
      <ProgFooter />
    </div>
  );
}

export default Home;
