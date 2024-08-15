export default function Experience({ experience }) {
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
