import { useState } from "react";
import Menu from "../assets/menu.svg";

export default function MenuDropdown({ children }) {
  const [open, setOpen] = useState(false);
  return (
    <div id="menu-dropdown" className={open && "open"}>
      <div onClick={() => setOpen(!open)}>
        <img src={Menu} alt="Menu Icon" />
      </div>
      {open && children}
    </div>
  );
}
