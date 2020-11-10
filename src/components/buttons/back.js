import "./backbutton.css";

const BackButton = ({ children, ...prop }) => {
  return (
    <button {...prop} className="back-button">
      {children}
    </button>
  );
};

export default BackButton;
