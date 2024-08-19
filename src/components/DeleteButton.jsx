import Trash from "../assets/trash.svg";

//this component returns a button that deletes the data for the parent edit component from resumeData
export default function DeleteButton({
  type,
  itemId,
  handleChange,
  resumeData,
  descriptionId = null,
}) {
  function performDelete() {
    let newObject = { ...resumeData };
    if (descriptionId === null) {
      //if no descriptionId then delete resume object
      delete newObject[itemId];
      newObject[type] = newObject[type]["filter"]((id) => id !== itemId);
    } else {
      //if descriptionId exists that means we need to delete a bullet point
      delete newObject[itemId][descriptionId];
      delete newObject[itemId]["visibility" + descriptionId];
      newObject[itemId]["description"] = newObject[itemId]["description"][
        "filter"
      ]((id) => id !== descriptionId);
    }
    handleChange(newObject);
  }
  const style = {
    visibility: resumeData[itemId]["visibility" + descriptionId],
  };
  return (
    <button style={style} className="delete" onClick={performDelete}>
      {descriptionId === null && "Delete"}
      {descriptionId !== null && <img src={Trash} alt="Trash Icon" />}
    </button>
  );
}
