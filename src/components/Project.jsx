import "../styles/Project.css";

export default function Project({ project }) {
  return (
    <div className="project">
      <div>
        <div>
          <h4>{project.projectName + " "}</h4>
          <p>
            {project.tools && " "}
            {project.tools && " | "}
            {project.tools}
          </p>
        </div>
        <p>
          {project.startDate}{" "}
          {project.startDate !== "" && project.endDate !== "" && "-"}{" "}
          {project.endDate}
        </p>
      </div>
      <ul>
        {project.description.map((id) => {
          return <li key={id}>{project[id]}</li>;
        })}
      </ul>
    </div>
  );
}
