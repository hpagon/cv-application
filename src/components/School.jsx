export default function School({
  schoolName = "Example University",
  major = "Bachelor of Science in Computer Science",
  location = "Seattle, WA",
  time = "Aug 2017 - May 2021",
}) {
  return (
    <div>
      <div>
        <h3>{schoolName}</h3>
        <p>{location}</p>
      </div>
      <div>
        <p>{major}</p>
        <p>{time}</p>
      </div>
    </div>
  );
}
