import React from "react";
import { Button } from "react-bootstrap";
import "./style.css";
import { RiDeleteBinLine } from "react-icons/ri";
import goalAPI from "../../utils/goalApi";
import {useAuthenticatedUser} from "../../utils/auth";
import API from "../../utils/API";

function DeleteButton({ chartGoal, setGoals, notifyDelete, setIndex }) {
  
  const user = useAuthenticatedUser();

  const deleteGoal = (id) => {
    goalAPI.deleteGoal(id).then((res) => reloadGoals(user._id), notifyDelete());
  };

  const reloadGoals = (req, res) => {
    API.lookup(req)
      .then((res) => {
        setGoals(res.data.goalsSet);
        setIndex(0);
        console.log("Home Page: res.data", res.data);
      })
      .catch((err) => console.log(err));
  };

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
