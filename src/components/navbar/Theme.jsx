import { RiToggleFill } from "react-icons/ri";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import switchThemeCss from "../assets/css//navbarCss/Navbar.module.css";
import ModalStyle from "../assets/css//navbarCss/theme_btn.module.css";
import { useState } from "react";

function Theme(props) {
  const [theme, setTheme] = useState(false);



  return (
    <div className={`${switchThemeCss.theme_container} ${ModalStyle.theme_container}`}>
      <div>
        {theme ? (<>
          {props.text === "Light" ? (
              <div>
                <MdLightMode size={23} onClick={() => setTheme(false)}/>
              </div>
            ) : (
              <div>
                <MdDarkMode size={23} onClick={() => setTheme(false)} />
              </div>
            )}
          </>
        ) : (
          <>
            {props.text === "Light" ? (
              <div>
                <MdLightMode size={23} onClick={() => setTheme(true)}/>
              </div>
            ) : (
              <div>
                <MdDarkMode size={23} onClick={() => setTheme(true)} />
              </div>
            )}
          </>
        )}
        {theme && ( <>
        <div className={`${switchThemeCss.theme_modal} ${ModalStyle.theme_modal}`} onClick={() => setTheme(false)}>

          <div className={`${switchThemeCss.theme_div} ${ModalStyle.theme_div}`}>
            {props.text === "Light" ? (
              <div onClick={props.onClick}>
                {props.text} <MdLightMode size={20} />
              </div>
            ) : (
              <div onClick={props.onClick}>
                {props.text} <MdDarkMode size={20} />
              </div>
            )}
          </div>
            </div>
          
          </>
        )}
      </div>
    </div>
  );
}

export default Theme;

// {props.text === "Light" ? <MdLightMode onClick={props.onClick}/> : <MdDarkMode onClick={props.onClick}/>}
// <div className={switchThemeCss.theme_change} onClick={props.onClick} placeholder="Theme">
//   {props.text}
