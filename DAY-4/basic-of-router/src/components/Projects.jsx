import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
function Projects() {
  let [list] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  return (
    <>
      <ul className="project-menu">
        {list.map((project_id) => {
          return (
            <li key={project_id}>
              <NavLink to={`/our-projects/${project_id}`}>
                project-{project_id}
              </NavLink>
            </li>
          );
        })}
      </ul>
      <Outlet />
    </>
  );
}

export default Projects;
