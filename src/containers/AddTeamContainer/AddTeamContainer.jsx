import AddTeam from "../../components/AddTeam/AddTeam";
import HeadingContainer from "../HeadingContainer/HeadingContainer";
import NavBarContainer from "../NavBarContainer/NavBarContainer";
import "./AddTeamContainer.scss";

const AddTeamContainer = ({ pokeArr }) => {
  const handleSubmit = async trainer => {
    const result = await fetch("http://localhost:8080/team", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(trainer),
    });

    if (result.ok) {
      alert("User added");
    } else {
      const message = await result.text();
      alert(message);
    }
  };

  const defaultFormState = { trainer_name: "", game_info: "", description: ""};
  return (
    <div className="addTeamContainer">
      <HeadingContainer pokeArr={pokeArr} />
      <div className="addTeamContainer__layout">
        <div className="addTeamContainer__nav">
          <NavBarContainer />
        </div>
        <AddTeam handleSubmit={handleSubmit} defaultFormState={defaultFormState} />
      </div>
    </div>
  );
};

export default AddTeamContainer;

