import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../context/auth.context";

function ProtectedRouting({ type }) {
  let { authUser } = useAuthContext();
  if (type === 1) {
    return <>{authUser ? <Outlet /> : <Navigate to="/" />}</>;
  } else {
    return <>{authUser ? <Navigate to="/dashboard" /> : <Outlet />}</>;
  }
}

export default ProtectedRouting;

// user is not login so auth will not be there
