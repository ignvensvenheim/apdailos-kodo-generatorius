import "./header.css";
import logo from "../../assets/Svenheim_logo_rgb.webp";

function Header() {
  return (
    <img
      src={logo}
      alt="svenheim logo"
      onClick={() => window.location.reload()}
    />
  );
}

export default Header;
