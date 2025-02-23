import { Navigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext/AuthContext.tsx";
import React from "react";

const ProtectedRoute = ({ element }: { element: JSX.Element }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return element;
};

export default ProtectedRoute;
