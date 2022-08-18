import { Link } from "react-router-dom";
import logo from "../assets/images/media-site-logo.png";
import NavbarCss from "../assets/css//navbarCss/Navbar.module.css";
import { RiMenuLine, RiCloseLine, RiSearch2Line } from "react-icons/ri";

import { useState } from "react";
import Modal from "./Modal";
import Menu from "./Menu";
import "../../index.css";
import Theme from "./Theme";
import AnimationCss from "../assets/css/overallCss/animations.module.css";

import useLocalStorage from "use-local-storage";
import Search from "./Search";

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
        <div className={NavbarCss.logo}>
          <Link to={"/"}>
            <a href="#">
              <img src={logo} alt="logo" />
            </a>
          </Link>
        </div>

        <nav className={NavbarCss.navbar}>
          <Menu />
        </nav>
        <Search />
        <Theme onClick={switchTheme} text={theme} />
        <div className={NavbarCss.nav_bar_about}>
          <ul className={NavbarCss.about_links}>
            <div className={NavbarCss.about_menu_links}>
         
              <Link className={NavbarCss.services} to="/services">
                <p>BLOG</p>
              </Link>
            </div>
            <div className={NavbarCss.nav_bar_menu}>
              {toggleMenu ? (
                <RiCloseLine
                  className={`${NavbarCss.nav_bar_menubtn} ${NavbarCss.close_menubtn}`}
                  color="var(--error-color)"
                  size={70}
                  onClick={() => setToggleMenu(false)}
                />
              ) : (
                <>
                  <RiMenuLine
                    className={NavbarCss.nav_bar_menubtn}
                    color="var(--text-color)"
                    size={27}
                    onClick={() => setToggleMenu(true)}
                  />
                </>
              )}
              {toggleMenu && (
                <>
                  <Modal onClick={() => setToggleMenu(false)} />
                  <div
                    className={`${NavbarCss.navbar_menu_container} ${NavbarCss.fade_in}`}
                  >
                    <div className={AnimationCss.tracking_in_expand}>
                      <Menu onClick={() => setToggleMenu(false)} />
                      <div className={NavbarCss.menu_about_links}>
                        <Link className={NavbarCss.services} to="/services">
                          <p onClick={() => setToggleMenu(false)}>BLOG</p>
                        </Link>
                        <RiCloseLine
                          className={`${NavbarCss.close_menu} ${NavbarCss.close_menubtn}`}
                          color="var(--error-color)"
                          size={27}
                          onClick={() => setToggleMenu(false)}
                        />
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavBar;
