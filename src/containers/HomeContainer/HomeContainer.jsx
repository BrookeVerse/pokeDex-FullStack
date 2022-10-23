import Home from "../../components/Home/Home";
import { useEffect, useState } from "react";

import "./HomeContainer.scss";

const HomeContainer = () => {
  const [random, setRandom] = useState([]);
  const getRandomPokemon = async () => {
    const res = await fetch("http://localhost:8080/pokemon/random");
    const data = await res.json();
    setRandom(data);
  };

  useEffect(() => {
    getRandomPokemon();
  }, []);

  return (
    <div className="homeContainer">
      <div className="homeContainer__layout">
        <div className="homeContainer__content">
          <Home pokemon={random} />
        </div>
      </div>
      <footer className="homeContainer__footer">
        <p>Developer By Brooke Waldorf-Wells</p>
      </footer>
    </div>
  );
};

export default HomeContainer;
