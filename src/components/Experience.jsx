const defaultItems = [
  { id: 0, description: "Example bullet point where x resulted in y" },
  { id: 1, description: "Increased X effiency by doing y" },
];

export default function Experience({
  positionName = "Software Engineer Intern",
  time = "May 2024 - July 2024",
  organization = "Some Company",
  location = "Seattle, WA",
  description = defaultItems,
}) {
  return (
    <div>
      <div>
        <h3>{positionName}</h3>
        <p>{time}</p>
      </div>
      <div>
        <p>{organization}</p>
        <p>{location}</p>
      </div>
      <ul>
        {description.map((item) => {
          return <li key={item.id}>{item.description}</li>;
        })}
      </ul>
    </div>
  );
}
