import { Link } from "react-router-dom";
import NavbarCss from "../assets/css/navbarCss/Navbar.module.css";
import HoverMenu from "./HoverMenu";

const Menu = (props) => {
  return (
    <>
      <ul className={NavbarCss.nav_bar_links}>
        <Link to="/">
          <p onClick={props.onClick}>HOME</p>
        </Link>
        <Link to="/film">
          <p onClick={props.onClick}>VIDEOGRAPHY</p>
          <HoverMenu
            description="Here you will find films that have 
                         been produced in Mpesa Foundation Academy by the Media students"
          />
        </Link>
        <Link to="/design">
          <p onClick={props.onClick}>DESIGN</p>
          <HoverMenu
            description="Get to see designs that have been made by 
                         the MFA students, including graphic designs, Blender Models, e.t.c"
          />
        </Link>
        <Link to="/photography">
          <p onClick={props.onClick}>PHOTOGRAPHY</p>
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