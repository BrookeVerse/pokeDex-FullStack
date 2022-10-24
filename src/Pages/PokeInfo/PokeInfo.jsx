import "./PokeInfo.scss";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PokeInfoCard from "../../components/PokeInfoCard/PokeInfoCard";
const PokeInfo = ({ pokeArr }) => {
  const [pokemon, setPokemon] = useState();
  const { pokemonId } = useParams();
  const navigate = useNavigate();
  const pokemons = pokeArr.find((pokemon) => {
    return pokemon.id == pokemonId;
  });

  const updatePokemon = async (chosenPokemon) => {
    const response = await fetch(`http://localhost:8080/pokemon/${pokemonId}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(chosenPokemon.innerHTML),
    });
    setPokemon(chosenPokemon);
    navigate("/");
    window.location.reload(true);
  };

  const removePokemon = async (chosenPokemon) => {
    const response = await fetch(`http://localhost:8080/pokemon/remove/${pokemonId}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(chosenPokemon.innerHTML),
    });
    setPokemon(chosenPokemon);
    navigate("/");
    window.location.reload(true);
  };

  return (
    <article className="pokeInfo">
      <div className="pokeInfo__card">
        <PokeInfoCard pokemons={pokemons} updatePokemon={updatePokemon} removePokemon={removePokemon} />
      </div>
    </article>
  );
};

export default PokeInfo;
