import { Link } from "react-router-dom";
import NavbarCss from "../assets/css/navbarCss/Navbar.module.css";
import HoverMenu from "./HoverMenu";

const Menu = () => {
  return (
    <>
      <ul className={NavbarCss.nav_bar_links}>
        <Link to="/">
          <p>HOME</p>
        </Link>
        <Link to="/film">
          <p>VIDEOGRAPHY</p>
          <HoverMenu
            description="Here you will find films that have 
                         been produced in Mpesa Foundation Academy by the Media students"
          />
        </Link>
        <Link to="/design">
          <p>DESIGN</p>
          <HoverMenu
            description="Get to see designs that have been made by 
                         the MFA students, including graphic designs, Blender Models, e.t.c"
          />
        </Link>
        <Link to="/photography">
          <p>PHOTOGRAPHY</p>
          <HoverMenu
            description="Get to see outstanding talents in photography 
                         among the students of Mpesa Foundation Academy"
          />
        </Link>
      </ul>
    </>
  );
};
export default Menu;
