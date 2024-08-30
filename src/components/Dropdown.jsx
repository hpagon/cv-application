import "../styles/Dropdown.css";

export default function Dropdown({
  title,
  children,
  type = "medium",
  open,
  handleOpen,
  dropdownId,
}) {
  const header = () => {
    const displayTitle = title === "" ? "Untitled" : title;
    if (type === "large") return <h1>{displayTitle}</h1>;
    else if (type === "medium") return <h2>{displayTitle}</h2>;
    else return null;
  };

  return (
    <div className={"dropdown " + type + (open ? " open" : "  ")}>
      <div>
        {header()}
        <button
          onClick={() => {
            handleOpen(dropdownId, type);
          }}
        >
          {open ? "^" : "˅"}
        </button>
      </div>
      <div>{open && children}</div>
    </div>
  );
}
