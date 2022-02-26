import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export const AuthRouter = ({ children, ...rest }) => {
  const { isAuthenticated } = useAuth0();
  // Add your own authentication on the below line.
  return isAuthenticated ? children : <Navigate to={"/"} />;
};
