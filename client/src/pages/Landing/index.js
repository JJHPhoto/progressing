import React from "react";
import Chart from "../../components/Chart";
import { Header } from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import "./style.css";
// import LogoutButton from "../../components/LogoutButton";

function Home() {
  return (
    <div className="container">
      <Header />
      <NavBar />
      <Chart />
    </div>
  );
}

export default Home;
