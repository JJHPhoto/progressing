import React from "react";
import {Link} from "react-router-dom";

export function LoginEmailInput(props) {

    return(

        <div className="form-group emailInput">
            Use your email to login here.
            <input className="form-control" placeholder="User email (required)" {...props} />
        </div>
            
    );
}

export function LoginPasswordInput(props) {

    return(

        <div className="form-group passwordInput">
            User Password
            <input className="form-control" placeholder="YoUr PASsWorD H3Re (required)" {...props} />
        </div>
            
    );
}

export function LoginPageSubmit (props) {

    return (
        <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success submitBtn">
                {props.children}
                <Link to="/home" style={{ textDecoration: 'none', color: 'white'}}>Submit Login Info</Link>
                
        </button>
    );
}   

export function ReturnToStart (props) {

    return (
        <button {...props} style={{ float: "left", marginBottom: 10 }} className="btn btn-success submitBtn">
                {props.children}
                <Link to="/" style={{ textDecoration: 'none', color: 'white'}}>Return to Start</Link>
               
        </button>
    );
}