import React from "react";
import Chart from "../../components/Chart";
import { Header } from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import "./style.css";

function Home() {

  // const isAuthenticated = useIsAuthenticated();

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
