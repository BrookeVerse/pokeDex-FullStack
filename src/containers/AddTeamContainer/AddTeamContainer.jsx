import AddTeam from "../../components/AddTeam/AddTeam";
import "./AddTeamContainer.scss";

const AddTeamContainer = ({pokeArr, handleTeamName}) => {
    
  return (
    <div className="addTeamContainer">
        <AddTeam pokeArr={pokeArr} handleTeamName={handleTeamName} />
    </div>
  )
}

export default AddTeamContainer