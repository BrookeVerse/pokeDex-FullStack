import "./AddTeam.scss";
import { useState } from "react";

const AddTeam = ({ handleSubmit, defaultFormState }) => {
  const [trainer, setTrainer] = useState(defaultFormState);

  const handleValidation = (event) => {
    event.preventDefault();

    if (Object.values(trainer).some((value) => !value)) {
      alert("Missing content, unable to proceed");
      return;
    }

    handleSubmit(trainer);
  };
  return (
    <div className="addTeam">
      <h2 className="addTeam__heading">Create A Trainer</h2>
      <p className="addTeam__instruction">You can create a trainer here, and set what game that trainer that game is in.</p>
      <form onSubmit={handleValidation}>
        <div className="addTeam__pokeTeam">
          <div className="addTeam__inputFocus">
            <input
              type="text"
              placeholder="Trainer Name..."
              name="pokemon_id"
              className="addTeam__input"
              value={trainer.trainer_name}
              onInput={(event) => setTrainer({ ...trainer, trainer_name: event.target.value })}
            />
            <span className="focus-border"></span>
          </div>
          <div className="addTeam__inputFocus">
            <input
              type="text"
              placeholder="Pokemon Game..."
              name="Name"
              className="addTeam__input"
              value={trainer.game_info}
              onInput={(event) => setTrainer({ ...trainer, game_info: event.target.value })}
            />
            <span className="focus-border"></span>
          </div>
          <div className="addTeam__inputFocus">
            <input
              type="text"
              placeholder="Notes..."
              name="Name"
              className="addTeam__input"
              value={trainer.description}
              onInput={(event) => setTrainer({ ...trainer, description: event.target.value })}
            />
            <span className="focus-border"></span>
          </div>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddTeam;
