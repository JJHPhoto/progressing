import React from "react";
import {Link} from "react-router-dom";


export function SignUpFirstName(props) {

    return(

        <div className="form-group firstNameInput">
            Your first name:
            <input className="form-control" placeholder="Your first name (required)" {...props} />
        </div>
            
    );
}

export function SignUpLastName(props) {

    return(

        <div className="form-group lastNameInput">
            Your last name:
            <input className="form-control" placeholder="Your last name (required)" {...props} />
        </div>
            
    );
}


export function SignUpEmailInput(props) {

    return(

        <div className="form-group emailInput">
            Which email would you like to use as your user ID?
            <input className="form-control" placeholder="User email (required)" {...props} />
        </div>
            
    );
}

export function SignUpPasswordInput(props) {

    return(

        <div className="form-group passwordInput">
            User Password:
            <input className="form-control" placeholder="YoUr PASsWorD H3Re (required)" {...props} />
        </div>
            
    );
}

export function SignUpPageSubmit (props) {

    return (
        <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success submitBtn">
                {props.children}

                <Link to="/home" style={{ textDecoration: 'none', color: 'white'}}>Submit Signup Info</Link>
              
        </button>
    );
}   