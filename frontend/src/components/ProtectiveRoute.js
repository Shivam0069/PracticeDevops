import { Navigate } from "react-router-dom";

const ProtectiveRoute = ({ children, user }) => {
  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectiveRoute;
