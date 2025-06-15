import React, { use } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { Navigate, useLocation } from "react-router";
import LoadingEffect from "../Components/LoadingEffect/LoadingEffect";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();
  // console.log(location.pathname);

  if (loading) {
    return <LoadingEffect></LoadingEffect>;
  }

  if (!user) {
    return <Navigate to="/login" state={location.pathname}></Navigate>;
  }
  return children;
};

export default PrivateRoute;
