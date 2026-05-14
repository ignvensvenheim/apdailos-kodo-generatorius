import "./header.css";

function Header() {
  return (
    <img
      src="/logo.svg"
      alt="Svenheim"
      onClick={() => window.location.reload()}
    />
  );
}

export default Header;
