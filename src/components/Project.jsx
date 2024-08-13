const defaultItems = [
  { id: 0, description: "Example bullet point where x resulted in y" },
  { id: 1, description: "Increased X effiency by doing y" },
];

export default function Project({
  projectName = "Example Project",
  tools = "HTML, CSS, JavaScript, React",
  time = "July 2024 - July 2024",
  description = defaultItems,
}) {
  return (
    <div>
      <div>
        <h4>{projectName}</h4>
        <p>{tools}</p>
        <p>{time}</p>
      </div>
      <ul>
        {description.map((item) => {
          return <li key={item.id}>{item.description}</li>;
        })}
      </ul>
    </div>
  );
}
