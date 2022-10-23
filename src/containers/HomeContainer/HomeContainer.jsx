import Home from "../../components/Home/Home";
import HeadingContainer from "../HeadingContainer/HeadingContainer";
import NavBarContainer from "../NavBarContainer/NavBarContainer";
import { useEffect, useState } from "react";
import "./HomeContainer.scss";

const HomeContainer = ({ pokeArr }) => {
  const [random, setRandom] = useState([]);
  const getRandomPokemon = async () => {
    const res = await fetch("http://localhost:8080/pokemon/random");
    const data = await res.json();
    setRandom(data);
  };

  useEffect(() => {
    getRandomPokemon();
  }, []);
  const pokeTrainer = pokeArr.filter((pokemon) => pokemon.team == "trainer");
  return (
    <div className="homeContainer">
      <HeadingContainer pokeArr={pokeTrainer} />
      <div className="homeContainer__layout">
        <div className="homeContainer__nav">
          <NavBarContainer />
        </div>
        <div className="homeContainer__content">
          <Home pokemon={random} />
        </div>
      </div>
    </div>
  );
};

export default HomeContainer;
