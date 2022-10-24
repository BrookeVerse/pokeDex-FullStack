import "./NavBarItem.scss";
import { Link } from "react-router-dom";
const NavBarItem = ({ text, link, children }) => {
  

  

  return (
    <Link to={link} className="navBarItem__link">
      <div className="navBarItem">
        <div className="navBarItem__image">{children}</div>
        <p className="navBarItem__text">{text}</p>
      </div>
    </Link>
  );
};

export default NavBarItem;
