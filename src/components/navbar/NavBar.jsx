import { Link } from "react-router-dom";
import logo from "../assets/images/media-site-logo.png";
import NavbarCss from "../assets/css//navbarCss/Navbar.module.css";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";

import { useState } from "react";
import Modal from "./Modal";
import Menu from "./Menu";

function NavBar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <div className={NavbarCss.nav_container}>
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

        <div className={NavbarCss.nav_bar_about}>
          <ul className={NavbarCss.about_links}>
            <div className={NavbarCss.about_menu_links}>
              <Link className={NavbarCss.about} to="/about">
                <p>ABOUT</p>
              </Link>
              <Link className={NavbarCss.services} to="/services">
                <p>SERVICES</p>
              </Link>
            </div>
            <div className={NavbarCss.nav_bar_menu}>
              {toggleMenu ? (
                <RiCloseLine className={NavbarCss.nav_bar_menubtn}
                  color="#fff"
                  size={27}
                  onClick={() => setToggleMenu(false)}
                />
              ) : (
                <>
                  <RiMenuLine className={NavbarCss.nav_bar_menubtn}
                    color="#fff"
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
                    <div>
                      <Menu />
                      <div className={NavbarCss.menu_about_links}>
                        <Link className={NavbarCss.about} to="/about">
                          <p>ABOUT</p>
                        </Link>
                        <Link className={NavbarCss.services} to="/services">
                          <p>SERVICES</p>
                        </Link>
                        <RiCloseLine
                          className={NavbarCss.close_menu}
                          color="#fff"
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
