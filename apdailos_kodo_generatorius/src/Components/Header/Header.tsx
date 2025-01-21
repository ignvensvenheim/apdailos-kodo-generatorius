import "./header.css";
import logo from "../../assets/Svenheim_logo_rgb.webp";

function Header() {
  return (
    <div className="headerContainer">
      <img src={logo} alt="svenheim logo" />
      <h1>Apdailos generatorius</h1>
    </div>
  );
}

export default Header;
