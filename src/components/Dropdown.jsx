import { useState } from "react";

export default function Dropdown({ title, children }) {
  const [visibility, setVisibility] = useState(false);
  return (
    <div>
      <div>
        <h1>{title}</h1>
        <button
          onClick={() => setVisibility(visibility === false ? true : false)}
        >
          V
        </button>
      </div>
      <div>{visibility && children}</div>
    </div>
  );
}
