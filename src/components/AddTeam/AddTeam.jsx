import "./AddTeam.scss";
import { Link } from "react-router-dom";

const AddTeam = ({ handleTeamName, handlePokeId }) => {
  return (
    <div className="addTeam">
      <div className="addTeam__name">
        <label htmlFor="Name" className="addTeam__nameLabel">
          Team Name?
        </label>
        <input type="text" placeholder="Enter Team Name..." name="Name" className="addTeam__nameInput" onChange={handleTeamName} />
      </div>

      <h2>Who is on your team?</h2>
      <div className="addTeam__pokeTeam">
        <label htmlFor="Team" className="addTeam__pokeLabel">
          Enter the pokemon Id to add to your team...
        </label>
        <input type="number" placeholder="Pokemon Id here" name="pokemon_id" className="addTeam__pokeIdInput" onChange={handlePokeId} />
      </div>
      <Link to={"/profile/"}>
        <button>Back</button>
      </Link>
    </div>
  );
};

export default AddTeam;
