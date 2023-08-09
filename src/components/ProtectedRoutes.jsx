import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Auth from "./Auth";

const ProtectedRoutes = () => {
  const userAuth = Auth();

  return userAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
