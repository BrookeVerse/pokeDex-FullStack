import "./Header.scss";

const Header = ({ pageTitle }) => {
  return (
    <header className="header">
      <h2 className="header__title">{pageTitle}</h2>
    </header>
  );
};

export default Header;