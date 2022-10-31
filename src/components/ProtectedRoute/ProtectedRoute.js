import React from "react";
import { Route, Redirect } from "react-router-dom";

function ProtectedRoute ({ component: Component, ...props }) {
  return (
    <Route>
      {() => props.loggedIn ? <Component {...props}/> : <Redirect to="./login" />}
    </Route>
  );
};

export default ProtectedRoute;


// import { Navigate } from 'react-router-dom';

// export default function ProtectedRoute({ children, loggedIn }) {

//     if (loggedIn) {
//         return children;
//     }

//     return <Navigate to='/' />
// }
