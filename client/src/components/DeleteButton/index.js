import React from "react";
import { Button } from "react-bootstrap";
import "./style.css";
import { RiDeleteBinLine } from "react-icons/ri";

function DeleteButton({ chartGoal, setGoals, deleteGoal }) {

  return (
    <Button
      className="delete p-1"
      style={{
        height: "35px",
        marginRight: "7%",
      }}
      variant="success"
      onClick={() => deleteGoal(chartGoal._id)}
    >
      {/* <Link to="/home#"> */}
        <RiDeleteBinLine />
      {/* </Link> */}
    </Button>
  );
}

export default DeleteButton;
