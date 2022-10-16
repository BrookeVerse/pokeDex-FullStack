import "./AddTeam.scss";
import CardContainer from "../../containers/CardContainer/CardContainer";
import { Link } from "react-router-dom";

const AddTeam = ({ pokeArr, handleTeamName }) => {
  return (
    <div className="addTeam">
      <div className="addTeam__name">
        <label htmlFor="Name">Team Name?</label>
        <input type="text" placeholder="Enter Team Name..." name="Name" className="addTeam__nameInput" onChange={handleTeamName}/>
      </div>

      <label htmlFor="Team">Who is on your Team?</label>
      <CardContainer pokeArr={pokeArr} />
      <Link to={"/profile/"}>
        <button>Back</button>
      </Link>
    </div>
  );
};

export default AddTeam;
