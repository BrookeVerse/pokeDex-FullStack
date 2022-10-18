import AddTeam from "../../components/AddTeam/AddTeam";
import HeadingContainer from "../HeadingContainer/HeadingContainer";
import NavBarContainer from "../NavBarContainer/NavBarContainer";
import "./AddTeamContainer.scss";

const AddTeamContainer = ({ pokeArr, handleTeamName }) => {
  return (
    <div className="addTeamContainer">
      <HeadingContainer pokeArr={pokeArr} />
      <div className="addTeamContainer__layout">
        <div className="addTeamContainer__nav">
          <NavBarContainer />
        </div>
        <AddTeam pokeArr={pokeArr} handleTeamName={handleTeamName} />
      </div>
    </div>
  );
};

export default AddTeamContainer;
