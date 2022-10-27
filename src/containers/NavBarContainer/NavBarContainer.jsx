import "./NavBarContainer.scss";
import NavBarItem from "../../components/NavBarItem/NavBarItem";
import { AiOutlineUsergroupDelete } from "react-icons/ai";
import { TbPokeball } from "react-icons/tb";
import { RiTeamFill } from "react-icons/ri";
import { FcHome } from "react-icons/fc";
import Header from "../../components/Header/Header";
const NavBarContainer = () => {
  return (
    <div className="navBar">
      <div className="navBar__container">
        <div className="navBar__header">
          <Header pageTitle={"PikaDex"} />
        </div>
        <ul className="navBar__linkList">
          <li className="navBar__link">
            <div className="navBar__image">
              <FcHome />
            </div>
            <NavBarItem text="Home" link="/" />
          </li>
          <li className="navBar__link">
            <div className="navBar__image">
              <AiOutlineUsergroupDelete />
            </div>
            <NavBarItem text="Profile" link="/profile/" />
          </li>
          <li className="navBar__link">
            <div className="navBar__image">
              <TbPokeball />
            </div>
            <NavBarItem text="PokeDex" link="/pokedex/" />
          </li>
          <li className="navBar__link">
            <div className="navBar__image">
              <RiTeamFill />
            </div>
            <NavBarItem text="Trainer" link="/addTeam/" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBarContainer;
