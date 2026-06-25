import "./header.css";

const logoPath = `${import.meta.env.BASE_URL}logo.svg`;

function Header() {
  return (
    <img
      src={logoPath}
      alt="Svenheim"
      onClick={() => window.location.reload()}
    />
  );
}

export default Header;
