import "./style/NavBar.css";
import mainLogo from "../assets/main_logo.svg";

const NavBar = () => {
  return (
    <nav className='navigation-bar'>
      <img src={mainLogo} alt="" />
    </nav>
  )
}

export default NavBar