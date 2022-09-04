import { Link } from "react-router-dom";
import NavbarCss from "../assets/css/navbarCss/Navbar.module.css";
import HoverMenu from "./HoverMenu";

const Menu = (props) => {
  return (
    <>
      <ul className={NavbarCss.nav_bar_links}>
        <Link to="/">
          <p onClick={props.onClick}>
            <div className={NavbarCss.icon}>🏠</div>
            HOME
          </p>
          <HoverMenu
            description="Here you will find various videos like films and music that has
                         been produced in Mpesa Foundation Academy by the Media students"
          />
        </Link>
        <Link to="/video">
          <p onClick={props.onClick}>
            <div className={NavbarCss.icon}>🎞</div>
             VIDEOS
          </p>
          <HoverMenu
            description="Here you will find various videos like films and music that has
                         been produced in Mpesa Foundation Academy by the Media students"
          />
        </Link>
        <Link to="/photos">
          <p onClick={props.onClick}>
            <div className={NavbarCss.icon}> 📸</div>
            PHOTOS
          </p>
          <HoverMenu
            description="Get to see outstanding talents in photography 
                         among the students of Mpesa Foundation Academy"
          />
        </Link>
        <Link className={NavbarCss.about} to="/about">
          <p onClick={props.onClick}>
            <div className={NavbarCss.icon}>❓</div>ABOUT
          </p>
        </Link>
      </ul>
    </>
  );
};
export default Menu;
