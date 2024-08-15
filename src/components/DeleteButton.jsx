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
      newObject[itemId]["description"] = newObject[itemId]["description"][
        "filter"
      ]((id) => id !== descriptionId);
    }
    handleChange(newObject);
  }
  return <button onClick={performDelete}>Delete</button>;
}
