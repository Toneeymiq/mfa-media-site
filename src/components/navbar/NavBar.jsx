import { Link } from "react-router-dom";
import logo from "../assets/images/media-site-logo.png";
import NavbarCss from "../assets/css//navbarCss/Navbar.module.css";
import { RiCameraLensFill, RiCloseCircleFill, RiMenu2Line } from "react-icons/ri";

import { useState } from "react";
import Modal from "./Modal";
import Menu from "./Menu";
import "../../index.css";
import Theme from "./Theme";
import AnimationCss from "../assets/css/overallCss/animations.module.css";

import useLocalStorage from "use-local-storage";
import { Search_icon } from "./Search";
import SideBar from "./SideBar";
import { MdLens } from "react-icons/md";

function NavBar() {

  const [toggleMenu, setToggleMenu] = useState(false);

  const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");
  const switchTheme = () => {
    const newTheme = theme === "Light" ? "Dark" : "Light";
    setTheme(newTheme);
  };
  return (
    <>
      <div className={NavbarCss.theme} data-theme={theme}></div>
      <div className={NavbarCss.nav_container} data-theme={theme}>
        <div className={NavbarCss.navigation}>
          {toggleMenu ? (
            <></>
          ) : (
            <>
              <div>
                {/* <RiMenu2Line
                  className={`${NavbarCss.nav_bar_menubtn} ${NavbarCss.open_menubtn}`}
                  color="var(--text-color)"
                  onClick={() => setToggleMenu(true)}
                /> */}
              </div>
            </>
          )}
          {toggleMenu && (
            <>
              <Modal onClick={() => setToggleMenu(false)} />
              <div
                className={`${NavbarCss.navbar_menu_container} ${NavbarCss.fade_in}`}
              >
                <div className={AnimationCss.tracking_in_expand}>
                  <div className={NavbarCss.close_menu}>
                    <RiCloseCircleFill
                      className={NavbarCss.menu_closing}
                      color="var(--text-color)"
                      size={25}
                      onClick={() => setToggleMenu(false)}
                    />
                  </div>

                  <Menu onClick={() => setToggleMenu(false)} />
                  <div className={NavbarCss.menu_about_links}>
                    <Link className={NavbarCss.services} to="/services">
                      <p onClick={() => setToggleMenu(false)}>
                        <div className={NavbarCss.icon}></div>
                        👨‍👩‍👦‍👦 BLOG
                      </p>
                    </Link>
                  </div>
                  <SideBar onClick={() => setToggleMenu(false)} />
                </div>
              </div>
            </>
          )}
          <div className={NavbarCss.logo}>
            <Link to={"/"}>
                {/* <img src={logo} alt="logo" /> */}
                <h1><RiCameraLensFill color="var(--text-color)" size={40}/>{" "} TDL TV</h1>
            </Link>
          </div>

          <nav className={NavbarCss.navbar}>
            <Menu />
          </nav>
          <a href="#/search">
            <Search_icon />
          </a>

          <Theme onClick={switchTheme} text={theme} />
          <div className={NavbarCss.nav_bar_about}>
            <ul className={NavbarCss.about_links}>
              <Link className={NavbarCss.services} to="/blog">
                <div className={NavbarCss.about_menu_links}>
                  <p>BLOG</p>
                </div>
              </Link>
              <div className={NavbarCss.nav_bar_menu}></div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
