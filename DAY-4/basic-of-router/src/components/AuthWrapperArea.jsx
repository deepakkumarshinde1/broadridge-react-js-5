import React from "react";
import { Navigate } from "react-router-dom";

function AuthWrapperArea({ isLogin, children }) {
  return <>{isLogin ? <Navigate to="/" /> : <>{children}</>}</>;
}

export default AuthWrapperArea;
