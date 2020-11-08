import "./delete.css";

const DeleteButton = ({ children, ...prop }) => {
  return (
    <button {...prop} className="delete-button">
      {children}
    </button>
  );
};

export default DeleteButton;
