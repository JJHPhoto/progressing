import React, {useState, useEffect} from "react";
import Chart from "../../components/Chart";
import { Header } from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import "./style.css";
// import goalAPI from "../../utils/goalApi"

function Home() {

  // // State to display goals
  // const [goals, setGoals] = useState([]);

  // console.log(goals);

  // useEffect(() => {
  //     loadGoals()
  //   }, [])

  // const loadGoals = (req,res) => {
  //     goalAPI.getGoals(res)
  //         .then(res => {
  //             setGoals(res.data);
  //             console.log(res.data);      
  //         })
  //         .catch(err => console.log(err));
  // }

  return (
    <div className="container">
      <Header />      
      <NavBar />
      {/* <Button variant="success"> <Link to="/creategoal" style={{ testDecoration: "none", color: "white"}}>Life Goals</Link> </Button> */}
      <Chart />
    </div>
  );
}

export default Home;
