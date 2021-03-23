import React, {useEffect,useState} from "react";
import PieProgressBar from "../../components/PieProgressBar";
import goalAPI from "../../utils/goalApi";

function Goal() {
   // State to display goals
   const [goals, setGoals] = useState([]);

   console.log(goals);
 
   useEffect(() => {
     loadGoals();
   }, []);
 
   const loadGoals = (req, res) => {
     goalAPI
       .getGoals(res)
       .then((res) => {
         setGoals(res.data);
         console.log(res.data);
       })
       .catch((err) => console.log(err));
   };

  return (
    <div  >
      <h1>Goal Page</h1>
      <div className="d-flex flex-row justify-content-center">
      {goals.map(goals => {
        return (
        <PieProgressBar chartGoal={goals}/>
        )
      })}  
      </div>
    </div>
  );
}

export default Goal;
