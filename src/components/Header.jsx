export default function Header({
  fullName = "Full name",
  phoneNumber = "123-456-789",
  email = "exampleEmail@gmail.com",
  linkedIn = "https://www.linkedin.com/",
  github = "https://github.com/",
}) {
  return (
    <div>
      <h1>{fullName}</h1>
      <div>
        <p>{phoneNumber}</p>
        <p>{email}</p>
        <p>{linkedIn}</p>
        <p>{github}</p>
      </div>
    </div>
  );
}
