import "../styles/Menus.css";
import MenuDropdown from "./MenuDropdown";
import MenuButtons from "./MenuButtons";

export default function Menu({ handleChange, handlePrint, mobile }) {
  return (
    <div id="menu">
      <div>
        <h1>CV Builder</h1>
        {mobile ? (
          <MenuDropdown>
            <MenuButtons
              handleChange={handleChange}
              handlePrint={handlePrint}
            />
          </MenuDropdown>
        ) : (
          <MenuButtons handleChange={handleChange} handlePrint={handlePrint} />
        )}
      </div>
    </div>
  );
}
