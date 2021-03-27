import React from "react";
import { Button } from "react-bootstrap";
import goalAPI from "../../utils/goalApi";
import API from "../../utils/API";
import {useAuthenticatedUser} from "../../utils/auth";
import "./style.css";


function DeleteButton({chartGoal, setGoals}) {

    const user = useAuthenticatedUser();

    const deleteGoal = (id) => {
        goalAPI.deleteGoal(id)
            .then(res => loadGoals(user._id)
            )};

        const loadGoals = (req, res) => {
            API
            .lookup(req)
            .then((res) => {
                setGoals(res.data.goalsSet);
                console.log("Home Page: res.data", res.data);
            })
            .catch((err) => console.log(err));
            };

    return (
        <Button type="button" className="delete btn btn-primary ml-2" 
        style={{
            height: "38px", 
            width: "40px",
            backgroundColor: "white", 
            color: "black",
            borderColor: "lightgrey",
            fontSize: "17.5px",
            textAlign: "center",
            marginRight: "7%"
            }} 
            onClick={() => deleteGoal(chartGoal._id)}>
                X
        </Button>
    )
}

export default DeleteButton