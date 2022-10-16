import "./NavBarContainer.scss";
import NavBarItem from "../../components/NavBarItem/NavBarItem";
import { AiOutlineUsergroupDelete } from "react-icons/ai";
import { TbPokeball } from "react-icons/tb";
import { RiTeamFill } from "react-icons/ri";

const NavBarContainer = ({ selected, getCurrentPage }) => {
  return (
    <div className="navBar">
      <div className="navBar__container">
        <ul className="navBar__linkList">
          <li className="navBar__link">
            <AiOutlineUsergroupDelete />
            <NavBarItem text="Profile" selected={selected} getCurrentPage={getCurrentPage} link="/" />
          </li>
          <li className="navBar__link">
            <TbPokeball />
            <NavBarItem text="PokeDex" selected={selected} getCurrentPage={getCurrentPage} link="/" />
          </li>
          <li className="navBar__link">
            <RiTeamFill />
            <NavBarItem text="Team" selected={selected} getCurrentPage={getCurrentPage} link="/" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBarContainer;
