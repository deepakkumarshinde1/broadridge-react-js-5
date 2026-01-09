import Dashboard from "./components/Dashboard";
import BlogDetails from "./components/BlogDetails";
import CreateBlog from "./components/CreateBlog";
import Home from "./components/HomePage";
import Login from "./components/Login";
import Register from "./components/Register";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import MyBlog from "./components/MyBlog";

function App() {
  return (
    <>
      {/* Header */}
      <Header />
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my-blog" element={<MyBlog />} />
          <Route path="/blog-details" element={<BlogDetails />} />
          <Route path="/create-blog" element={<CreateBlog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create-account" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
