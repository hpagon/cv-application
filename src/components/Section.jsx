import "../styles/Section.css";

export default function Section({ title, children }) {
  return (
    <div className="section">
      <h2>{title}</h2>
      <hr />
      {children}
    </div>
  );
}
