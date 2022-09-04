import HoverMenuCss from '../assets/css/navbarCss/Navbar.module.css'

function HoverMenu(props) {
  return (
    <div className={HoverMenuCss.nav_bar_hover_container}>
        <div className={HoverMenuCss.hover_content}>
            <p>{props.description}</p>
        </div>
    </div>
  )
}

export default HoverMenu;