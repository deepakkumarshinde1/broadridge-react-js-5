import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Team from "./components/Team";
import NotFound from "./components/NotFound";
import ProjectData from "./components/ProjectData";
import { useState } from "react";
import ProjectRouting from "./components/ProjectRouting";
import Login from "./components/Login";
import AuthWrapperArea from "./components/AuthWrapperArea";
function App() {
  let [isLogin] = useState(true);
  return (
    <>
      {/* header section */}
      <ul className="menu">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about-us">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        {isLogin && (
          <>
            <li>
              <NavLink to="/team">Team</NavLink>
            </li>
            <li>
              <NavLink to="/our-projects">Project</NavLink>
            </li>
          </>
        )}
      </ul>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="" element={<ProjectRouting isLogin={isLogin} />}>
          <Route path="/team" element={<Team />} />
          <Route path="/our-projects" element={<Projects />}>
            <Route path="" element={<Navigate to="/our-projects/1" />} />
            <Route path=":project_id" element={<ProjectData />} />
          </Route>
        </Route>
        <Route
          path="/login"
          element={
            <AuthWrapperArea isLogin={isLogin}>
              <Login />
            </AuthWrapperArea>
          }
        />
        <Route
          path="/reg"
          element={
            <AuthWrapperArea isLogin={isLogin}>
              <Reg />
            </AuthWrapperArea>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
