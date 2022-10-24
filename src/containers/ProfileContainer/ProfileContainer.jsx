import Profile from "../../components/Profile/Profile";
import NavBarContainer from "../NavBarContainer/NavBarContainer";
import HeadingContainer from "../HeadingContainer/HeadingContainer";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./ProfileContainer.scss";

const ProfileContainer = ({ handleTeam, userName, userImage, userInfo, teamName }) => {
  const [pokemon, setPokemon] = useState([]);
  const [users, setUser] = useState([]);
  const [trainerId, setTrainerId] = useState();
  const [trainerInfo, setTrainerInfo] = useState([]);
  const navigate = useNavigate();

  const getPokemon = async () => {
    const res = await fetch("http://localhost:8080/pokemon/");
    const data = await res.json();
    setPokemon(data);
  };

  const getUser = async () => {
    const response = await fetch(`http://localhost:8080/team/`);
    const userData = await response.json();
    setUser(userData);
  };

  const getUserById = async (id) => {
    const response = await fetch(`http://localhost:8080/team/${id}`);
    const userData = await response.json();
    setTrainerInfo(userData);
  };

  const handleDelete = async (event) => {
    const id = event.target.value;
    const result = await fetch(`http://localhost:8080/team/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (result.ok) {
      alert("Trainer deleted");
      navigate("/");
    } else {
      const message = await result.text();
      alert(message);
    }
  };

  useEffect(() => {
    getPokemon();
    getUser();
    getUserById(trainerId);
  }, [trainerId]);

  const userOptions = users.map((user) => {
    return <option value={user.id}>{user.trainer_name}</option>;
  });

  const handleSelectedTrainer = (event) => setTrainerId(event.target.value);

  const pokeTrainer = pokemon.filter((pokemon) => pokemon.team == "trainer");

  const pokeTeam = pokeTrainer.slice(0, 6).map((team, index) => {
    return <img key={index} src={team.sprite} alt="Pokemon" className="profileHeader__team" />;
  });
  return (
    <div className="profileContainer">
      <HeadingContainer pokeArr={pokeTrainer} />
      <div className="profileContainer__layout">
        <div className="profileContainer__nav">
          <NavBarContainer />
        </div>
        <div className="profileContainer__profile">
          <Profile
            userName={userName}
            userImage={userImage}
            userInfo={userInfo}
            teamName={teamName}
            onChange={handleSelectedTrainer}
            pokeTeam={pokeTeam}
            handleTeam={handleTeam}
            trainerInfo={trainerInfo}
            userOptions={userOptions}
            handleDelete={handleDelete}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileContainer;
