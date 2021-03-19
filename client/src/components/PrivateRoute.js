/* eslint-disable no-restricted-globals */
import { Route, Redirect } from "react-router-dom";
import { useIsAuthenticated } from "../utils/auth";

const PrivateRoute = ({ component: Component, children, redirectTo = "/", ...props }) => {

    const isAuth = useIsAuthenticated();

    // console.log("redirectTo", redirectTo)
    // console.log("location", location)
    // console.log("Component", Component)

    const render = () => (
        isAuth
        
            ? (Component ? <Component /> : children)
            
            : <Redirect to={{ pathname: redirectTo, state: { from: location } }} />
    );

    return (
        <Route
          {...props}
          render={render}
        />
    );

}

export default PrivateRoute;