import { NavLink, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

const About = lazy(() => import("./components/About"));
const Blogs = lazy(() => import("./components/Blogs"));
const Blog = lazy(() => import("./components/Blog"));
const Home = lazy(() => import("./components/Home"));

function App() {
  return (
    <>
      <ul data-testid="main-menu">
        <li data-testid="menu-item">
          <NavLink to="/">Home</NavLink>
        </li>
        <li data-testid="menu-item">
          <NavLink to="/about">About</NavLink>
        </li>
        <li data-testid="menu-item">
          <NavLink to="/blogs">Blogs</NavLink>
        </li>
        <li data-testid="menu-item">
          <NavLink to="/blog">Blog</NavLink>
        </li>
      </ul>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<Home text="Counter App" />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
