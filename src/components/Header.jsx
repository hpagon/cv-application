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
        <p>{phoneNumber}</p>
        {phoneNumber && (email || linkedIn || github) && <p>|</p>}
        <p>{email}</p>
        {email && linkedIn && <p>|</p>}
        <p>
          <a href={linkedInUrl}>{linkedIn}</a>
        </p>
        {(phoneNumber || email || linkedIn) && github && <p>|</p>}
        <p>
          <a href={githubUrl}>{github}</a>
        </p>
      </div>
    </div>
  );
}
