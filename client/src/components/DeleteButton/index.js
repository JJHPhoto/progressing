import React from "react";
import { Button } from "react-bootstrap";
import goalAPI from "../../utils/goalApi";
import API from "../../utils/API";
import { useAuthenticatedUser } from "../../utils/auth";
import "./style.css";
import { RiDeleteBinLine } from "react-icons/ri";

function DeleteButton({ chartGoal, setGoals }) {
  const user = useAuthenticatedUser();

  const deleteGoal = (id) => {
    goalAPI.deleteGoal(id).then((res) => loadGoals(user._id));
  };

  const loadGoals = (req, res) => {
    API.lookup(req)
      .then((res) => {
        setGoals(res.data.goalsSet);
        console.log("Home Page: res.data", res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Button
      className="delete p-1"
      // type="button"
      // className="delete btn btn-primary ml-2"
      style={{
        height: "35px",
        marginRight: "7%",
        // width: "35px",
        // width: "5rem",
        // color: "black",
        // padding: "1rem",
        // backgroundColor: "white",
        // borderColor: "lightgrey",
        // fontSize: "17.5px",
        // textAlign: "center",
        // marginRight: "7%",
      }}
      variant="success"
      onClick={() => deleteGoal(chartGoal._id)}
    >
      <RiDeleteBinLine />
    </Button>
  );
}

export default DeleteButton;
