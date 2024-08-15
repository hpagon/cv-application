import { useState } from "react";

export default function Dropdown({
  title,
  children,
  type = "medium",
  open,
  handleOpen,
}) {
  const [visibility, setVisibility] = useState(false);

  const header = () => {
    const displayTitle = title === "" ? "Untitled" : title;
    if (type === "large") return <h1>{displayTitle}</h1>;
    else if (type === "medium" && !visibility) return <h2>{displayTitle}</h2>;
    else return null;
  };

  return (
    <div>
      <div>
        {header()}
        <button
          onClick={() => {
            if (type === "large") {
              handleOpen(title);
            } else {
              setVisibility(!visibility);
            }
          }}
        >
          {visibility ? "^" : "˅"}
        </button>
      </div>
      <div>
        {/* large dropdowns depends on external state for visibility */}
        {type === "large" && open && children}
        {/* Medium dropdowns depend on local state for visibility */}
        {type === "medium" && visibility && children}
      </div>
    </div>
  );
}
