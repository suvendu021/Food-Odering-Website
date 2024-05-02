import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = (props) => {
  const isUserPresent = localStorage.getItem("userName");
  const { Component } = props;
  const navigate = useNavigate();
  useEffect(() => {
    if (!isUserPresent) navigate("/");
  }, []);

  return isUserPresent ? <Component /> : null;
};

export default ProtectedRoute;
