import SidebarCss from "../assets/css//navbarCss/sidebar.module.css";
import { Link } from "react-router-dom";
import { BsImage } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

function SideBar(props) {
  return (
    <div data-aos="zoom-out-up" className={SidebarCss.sidebar_container}>
      <div className={SidebarCss.sidebar_links}>
        <ul className={SidebarCss.links_container}>
          <div className={SidebarCss.sidebar_video_links}>
            <h1>📽 Videos</h1>
            <Link to="video/news&events">
              <p onClick={props.onClick}>📰 News/Events</p>
            </Link>

            <Link to="video/clubs&societies">
              <p onClick={props.onClick}>👩‍👩‍👦 Clubs & Societies</p>
            </Link>
            <Link to="video/arts&lifestyle">
              <p onClick={props.onClick}>🎨 Arts & Lifestyle</p>
            </Link>
            <Link to="video/educational">
              <p onClick={props.onClick}>🎓 Educational</p>
            </Link>

            <Link to="video/mini-documentaries">
              <p onClick={props.onClick}>🎥 Mini Documentaris</p>
            </Link>
            <Link to="video/adverts">
              <p onClick={props.onClick}>🗣 Adverts</p>
            </Link>
            <Link to="video/music">
              <p onClick={props.onClick}>🎧 Music Videos</p>
            </Link>
            <Link to="video/sports">
              <p onClick={props.onClick}>⚽️ Sports</p>
            </Link>

            <Link to="video/film">
              <p onClick={props.onClick}>🎬 Short Films</p>
            </Link>
          </div>
          <div className={SidebarCss.sidebar_photo_links}>
            <h1>
              {" "}
              <BsImage /> Photos
            </h1>
            <Link to="photos/news">
              <p onClick={props.onClick}>📃 News/Events</p>
            </Link>
            <Link to="photos/arts">
              <p onClick={props.onClick}>🖼 Arts & Lifestyle</p>
            </Link>
            <Link to="photos/clubs&societies">
              <p onClick={props.onClick}>👨‍👧‍👧 Clubs & Societies</p>
            </Link>
            <Link to="photos/sports">
              <p onClick={props.onClick}>⚽ Sports</p>
            </Link>
            <Link to="photos/educational">
              <p onClick={props.onClick}>🎓 Educational</p>
            </Link>
            <Link to="photos/nature">
              <p onClick={props.onClick}>🎓 Nature</p>
            </Link>
          </div>

          <div className={SidebarCss.sidebar_photo_links}>
            <h1> 👨‍👨‍👧‍👦 Blog</h1>
            <Link to="blog/news">
              <p onClick={props.onClick}>📃 News/Events</p>
            </Link>
            <Link to="blog/arts">
              <p onClick={props.onClick}>🖼 Arts & Lifestyle</p>
            </Link>
            <Link to="blog/clubs&societies">
              <p onClick={props.onClick}>👨‍👧‍👧 Clubs & Societies</p>
            </Link>
            <Link to="blog/sports">
              <p onClick={props.onClick}>⚽ Sports</p>
            </Link>
            <Link to="blog/educational">
              <p onClick={props.onClick}>🎓 Educational</p>
            </Link>
            <Link to="blog/innovation">
              <p onClick={props.onClick}>🧠 Innovation</p>
            </Link>
          </div>
          <div className={SidebarCss.admin}>
            <Link to="/tdl-tv/admin">
              <p>Admin Page</p>
            </Link>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
