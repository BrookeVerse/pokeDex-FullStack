import { useState } from "react";
import { useEffect } from "react";
import "./App.scss";
import PokeInfo from "./Pages/PokeInfo/PokeInfo";
import Main from "./Pages/Main/Main";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [searchWord, setSearchWord] = useState("");
  const [filterPokemon, setFilterPokemon] = useState([]);

  const getPokemon = async () => {
    const res = await fetch("https://api.pikaserve.xyz/pokemon/all");
    const data = await res.json();
    setPokemon(data);
  };

  useEffect(() => {
    getPokemon();
  }, []);

  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchWord(cleanInput);

    if (searchWord !== "") {
      const newPokeArr = pokemon.filter((pokemon) => {
        return pokemon.name.english.toLowerCase().includes(searchWord);
      });
      setFilterPokemon(newPokeArr);
    } else {
      setFilterPokemon(pokemon);
    }
  };

  return (
    <div className="App">
      <Main handleInput={handleInput} searchWord={searchWord} pokeArr={searchWord.length < 1 ? pokemon : filterPokemon} />
      <PokeInfo pokeArr={searchWord.length < 1 ? pokemon : filterPokemon} />
    </div>
  );
}

export default App;