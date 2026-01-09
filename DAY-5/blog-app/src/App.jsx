import Dashboard from "./components/Dashboard";
import BlogDetails from "./components/BlogDetails";
import CreateBlog from "./components/CreateBlog";
import Home from "./components/HomePage";
import Login from "./components/Login";
import Register from "./components/Register";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import MyBlog from "./components/MyBlog";
import ProtectedRouting from "./components/ProtectedRouting";

function App() {
  return (
    <>
      {/* Header */}
      <Header />
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog-details" element={<BlogDetails />} />

          {/* after login type=1 */}
          <Route path="" element={<ProtectedRouting type={1} />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/my-blog" element={<MyBlog />} />
            <Route path="/create-blog" element={<CreateBlog />} />
          </Route>

          {/* after logout type=0*/}
          <Route path="" element={<ProtectedRouting type={0} />}>
            <Route path="/login" element={<Login />} />
            <Route path="/create-account" element={<Register />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
