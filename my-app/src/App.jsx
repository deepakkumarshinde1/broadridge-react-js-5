import { Fragment } from "react";
import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Login from "./components/Login";
// import About, { Project } from "./components/About";
import Project from "./components/Project";

function App() {
  return (
    <>
      <Home />
      <Home />
      <About />
      <Login />
      <Project />
      <Home />
    </>
  );
}

export default App;

// module.exports = App // commonjs
