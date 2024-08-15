const defaultItems = [
  { id: 0, description: "Example bullet point where x resulted in y" },
  { id: 1, description: "Increased X effiency by doing y" },
];

export default function Experience({
  //   positionName = "Software Engineer Intern",
  //   time = "May 2024 - July 2024",
  //   organization = "Some Company",
  //   location = "Seattle, WA",
  //   description = defaultItems,
  experience,
}) {
  console.log(experience);
  return (
    <div>
      <div>
        <h3>{experience.positionName}</h3>
        <p>
          {experience.startDate}{" "}
          {experience.startDate !== "" && experience.endDate !== "" && "-"}{" "}
          {experience.endDate}
        </p>
      </div>
      <div>
        <p>{experience.organization}</p>
        <p>{experience.location}</p>
      </div>
      <ul>
        {experience.description.map((id) => {
          return <li key={id}>{experience[id]}</li>;
        })}
      </ul>
    </div>
  );
}
