import { useState } from "react";

export default function Dropdown({
  title,
  children,
  type = "medium",
  //   visibility = false,
  //   handleChange,
  //   dropDownId,
}) {
  const [visibility, setVisibility] = useState(false);

  const header = () => {
    if (type === "large") return <h1>{title}</h1>;
    else if (type === "medium" && !visibility) return <h2>{title}</h2>;
    else return null;
  };

  return (
    <div>
      <div>
        {header()}
        {/* <h1>{title}</h1> */}
        {/* <button onClick={() => handleChange(dropDownId)}>V</button> */}
        <button onClick={() => setVisibility(visibility ? false : true)}>
          {visibility ? "^" : "˅"}
        </button>
      </div>
      <div>{visibility && children}</div>
    </div>
  );
}
