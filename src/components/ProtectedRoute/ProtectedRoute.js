import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute ({ component: Component, loggedIn, ...props }) {
  console.log(`в роут приходит ${loggedIn}`)
  return (
    <>
      {loggedIn ? <Component {...props}/> : <Navigate to="/" />}
    </>
  );
};

export default ProtectedRoute;
