export default function Project({ project }) {
  return (
    <div>
      <div>
        <h4>{project.projectName}</h4>
        <p>{project.tools}</p>
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
