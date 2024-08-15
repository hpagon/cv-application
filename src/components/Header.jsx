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
    <div>
      <h1>{fullName}</h1>
      <div>
        <p>{phoneNumber}</p>
        <p>{email}</p>
        <p>
          <a href={linkedInUrl}>{linkedIn}</a>
        </p>
        <p>
          <a href={githubUrl}>{github}</a>
        </p>
      </div>
    </div>
  );
}
