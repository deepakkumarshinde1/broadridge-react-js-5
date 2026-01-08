import { Navigate, Outlet } from "react-router-dom";

function ProjectRouting(props) {
  let { isLogin } = props;
  return isLogin ? <Outlet /> : <Navigate to="/login" />;
}

export default ProjectRouting;
