import React from "react";




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

export function LoginUpPageSubmit (props) {

    return (
        <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success submitBtn">
                {props.children}
                Submit Login Info
        </button>
    );
}   