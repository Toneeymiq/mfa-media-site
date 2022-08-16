import { RiToggleLine, RiToggleFill } from "react-icons/ri";
import switchThemeCss from "../assets/css//navbarCss/Navbar.module.css";
import NavBar from "./NavBar";

function Theme(props) {
  return (
    <div className={switchThemeCss.theme_container}> <p1>Theme</p1>
      <div className={switchThemeCss.theme_change} onClick={props.onClick} placeholder="Theme">
        {props.text}
        <RiToggleFill className={switchThemeCss.theme_toggler}/>
      </div>
    </div>
  );
}

export default Theme;
