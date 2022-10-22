import Profile from "../../components/Profile/Profile";
import NavBarContainer from "../NavBarContainer/NavBarContainer";
import HeadingContainer from "../HeadingContainer/HeadingContainer";
import { useState, useEffect } from "react";
import "./ProfileContainer.scss";

const ProfileContainer = ({ handleTeam,userName, userImage, userInfo, teamName }) => {
  const [pokemon, setPokemon] = useState([]);
  const getPokemon = async () => {
    const res = await fetch("http://localhost:8080/pokemon/");
    const data = await res.json();
    setPokemon(data);
  };
  
  useEffect(() => {
    getPokemon();
  }, []);

  const pokeTrainer = pokemon.filter(pokemon => pokemon.team);
  

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
        <Profile userName={userName} userImage={userImage} userInfo={userInfo} teamName={teamName} pokeTeam={pokeTeam} handleTeam={handleTeam} />
      </div>
    </div>
  );
};

export default ProfileContainer;
