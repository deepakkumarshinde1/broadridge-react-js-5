import { useParams } from "react-router-dom";

function ProjectData() {
  let { project_id } = useParams();

  return <div>ProjectData {project_id}</div>;
}

export default ProjectData;
