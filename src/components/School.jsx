export default function School({ school }) {
  return (
    <div>
      <div>
        <h3>{school.schoolName}</h3>
        <p>{school.location}</p>
      </div>
      <div>
        <p>{school.major}</p>
        <p>
          {school.startDate}{" "}
          {school.startDate !== "" && school.endDate !== "" && "-"}{" "}
          {school.endDate}
        </p>
      </div>
    </div>
  );
}
