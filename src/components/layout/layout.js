import { Link } from "react-router-dom";
import "../../styles/layout.css";

const Layout = () => {
  return (
    <ul className="navbarhorizontal d-flex background-color-grey">
      <li>
        <Link className="text-decoration-none mg-10px">page1</Link>
      </li>
      <li>
        <Link className="text-decoration-none mg-10px">page2</Link>
      </li>
    </ul>
  );
};

export default Layout;
