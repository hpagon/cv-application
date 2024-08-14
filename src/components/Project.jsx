const defaultItems = [
  { id: 0, description: "Example bullet point where x resulted in y" },
  { id: 1, description: "Increased X effiency by doing y" },
];

export default function Project({
  //   projectName = "Example Project",
  //   tools = "HTML, CSS, JavaScript, React",
  //   time = "July 2024 - July 2024",
  //   description = defaultItems,
  project,
}) {
  return (
    <div>
      <div>
        <h4>{project.projectName}</h4>
        <p>{project.tools}</p>
        <p>{project.time}</p>
      </div>
      <ul>
        {project.description.map((id) => {
          return <li key={id}>{project[id]}</li>;
        })}
      </ul>
    </div>
  );
}
