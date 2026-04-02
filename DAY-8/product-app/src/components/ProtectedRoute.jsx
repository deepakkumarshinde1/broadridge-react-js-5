import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute({ type }) {
  let isUserLogin = useSelector((state) => state.userReducer.user);
  if (type === 1) {
    return <>{isUserLogin ? <Outlet /> : <Navigate to="/login" />}</>;
  } else {
    return <>{isUserLogin ? <Navigate to="/" /> : <Outlet />}</>;
  }
}

export default ProtectedRoute;
