import "./PokeInfo.scss";
import { Link, useParams } from "react-router-dom";

import blackCross from "../../assets/Images/black-cross.png";
import pokeball from "../../assets/Images/pokeballImg.png";
import { useState } from "react";
const PokeInfo = ({ pokeArr, handleClick }) => {
  const [pokemon, setPokemon] = useState();
  const { pokemonId } = useParams();
  const pokemons = pokeArr.find((pokemon) => {
    return pokemon.id == pokemonId;
  });

  const updatePokemon = async chosenPokemon => {
    const response = await fetch(`http://localhost:8080/pokemon/${pokemonId}`, {
    method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(chosenPokemon.innerHTML),
    })
    setPokemon(chosenPokemon);
    console.log(chosenPokemon);
  }

  return (
    <article className="pokeInfo">
      <div className="pokeInfo__container">
        <div className="pokeInfo__header">
          <h2 className="pokeCard__heading" name="title">
            {pokemons.name} #{pokemons.id}
          </h2>
          <div className="pokeInfo__types">{pokemons.type}</div>
        </div>
        <div className="pokeInfo__grid">
          <div className="pokeInfo__profile">
            <div className="pokeInfo__images">
              <img src={pokeball} alt="pokeball" className="pokeInfo__pokeball" />
              <img src={pokemons.hires} alt="" className="pokeInfo__pokeImg" />
            </div>
          </div>
          <div className="pokeInfo__description">
            <h2>Description</h2>
            <hr></hr>
            <p className="pokeCard__content" name="description">
              <p>
                {pokemons.height} {pokemons.weight}
              </p>
              {pokemons.description}
            </p>
            <button onClick={updatePokemon} value={pokemons.id}>Add To Team</button>
          </div>
        </div>
        <Link to={"/"}>
          <img src={blackCross} alt="Esc Button" className="pokeInfo__cross" />
        </Link>
      </div>
    </article>
  );
};

export default PokeInfo;
