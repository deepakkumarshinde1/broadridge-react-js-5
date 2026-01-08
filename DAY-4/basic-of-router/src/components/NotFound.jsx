import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      Page not found <Link to="/">Home Page</Link>
    </div>
  );
}

export default NotFound;
