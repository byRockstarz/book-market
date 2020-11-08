import "./edit.css";

const EditButton = ({ children, ...prop }) => {
  return (
    <button {...prop} className="edit-button">
      {children}
    </button>
  );
};

export default EditButton;
