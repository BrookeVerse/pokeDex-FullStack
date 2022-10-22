import "./AddTeam.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

const AddTeam = ({ handleSubmit, defaultFormState}) => {
 const [user, setUser] = useState(defaultFormState);

  const handleValidation = event => {
    event.preventDefault();

    if (Object.values(user).some(value => !value)) {
      alert("Missing content, unable to proceed");
      return;
    }

    handleSubmit(user);
  };
  return (
    <div className="addTeam">
      <h2>Create Profile Page</h2>
      <div className="addTeam__name">
        <label htmlFor="Name" className="addTeam__nameLabel">
          Team Name?
        </label>
        <input type="text" placeholder="Enter Team Name..." name="Name" className="addTeam__nameInput" />
      </div>

      <h2>FORM</h2>
      <form onSubmit={handleValidation}>
        <div className="addTeam__pokeTeam">
          <label htmlFor="Team" className="addTeam__pokeLabel">
            Enter Your NAME
          </label>
          <input type="text" placeholder="Whats your name?" name="pokemon_id" className="addTeam__pokeIdInput" value={user.first_name} onInput={event => setUser({...user, first_name: event.target.value})}/>
          <label htmlFor="Name" className="addTeam__nameLabel">
            Describe yourself?
          </label>
          <input type="text" placeholder="Tell us about yourself" name="Name" className="addTeam__nameInput" value={user.user_Info} onInput={event => setUser({...user, user_Info: event.target.value})}/>
          <label htmlFor="Name" className="addTeam__nameLabel">
            Password! shhhh
          </label>
          <input type="text" placeholder="password here..." name="Name" className="addTeam__nameInput" value={user.password} onInput={event => setUser({...user, password: event.target.value})}/>
        </div>
        <button>Submit</button>
      </form>
      <Link to={"/profile/"}>
        <button>Back</button>
      </Link>
    </div>
  );
};

export default AddTeam;
