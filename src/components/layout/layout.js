import { NavLink } from "react-router-dom";
import "../../styles/layout.css";

const Layout = () => {
  return (
    <ul className="mr-auto navbarhorizontal d-flex background-color-black mg-5px">
      <img
        className="width-height-21px mg-10px"
        src="https://www.iconarchive.com/download/i85581/graphicloads/100-flat/home.ico"
      />
      <li>
        <NavLink
          to="/"
          className="text-decoration-none color-white mg-10px d-block"
        >
          หน้าหลัก
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/book/create"
          className="text-decoration-none color-white mg-10px d-block"
        >
          สร้างหนังสือ
        </NavLink>
      </li>
    </ul>
  );
};

export default Layout;
