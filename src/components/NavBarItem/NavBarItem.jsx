import "./NavBarItem.scss";
import { Link } from "react-router-dom";
const NavBarItem = ({ text, selected, getCurrentPage, link, children }) => {
  let classes = "nav-bar-item";

  if (selected == text) {
    classes += " selected";
  }

  const handleClick = () => {
    getCurrentPage(text);
  };

  return (
    <Link to={link} className="link">
      <div className={classes} onClick={handleClick}>
        <div className="nav-bar-item__image">{children}</div>
        <p className="nav-bar-item__text">{text}</p>
      </div>
    </Link>
  );
};

export default NavBarItem;
