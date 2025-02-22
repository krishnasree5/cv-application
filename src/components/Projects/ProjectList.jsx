import PropTypes from "prop-types";
import ProjectDetail from "./ProjectDetail";

const ProjectList = ({ projects, handleChange, deleteProject }) => {
  return (
    <>
      {projects.map((project, index) => (
        <ProjectDetail
          key={index}
          project={project}
          handleChange={handleChange}
          deleteProject={deleteProject}
          index={index}
        />
      ))}
    </>
  );
};

ProjectList.propTypes = {
  projects: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
  deleteProject: PropTypes.func.isRequired,
};

export default ProjectList; 