export default function Skill({ type, items = "x, y, z, a, b, c" }) {
  return (
    <div>
      <p>
        <b>{type}:</b> {items}
      </p>
    </div>
  );
}
