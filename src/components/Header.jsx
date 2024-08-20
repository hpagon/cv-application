import "../styles/Header.css";

export default function Header({
  fullName = "Full name",
  phoneNumber = "123-456-789",
  email = "exampleEmail@gmail.com",
  linkedIn = "https://www.linkedin.com/",
  github = "https://github.com/",
  linkedInUrl,
  githubUrl,
}) {
  return (
    <div id="header">
      <h1>{fullName}</h1>
      <div>
        <p>
          {phoneNumber}
          {phoneNumber && (email || linkedIn || github) && " | "}
          {email}
          {email && linkedIn && " | "}
          <a href={linkedInUrl}>{linkedIn}</a>
          {(phoneNumber || email || linkedIn) && github && " | "}
          <a href={githubUrl}>{github}</a>
        </p>
      </div>
    </div>
  );
}
