import "./App.scss";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

import PokeInfo from "./Pages/PokeInfo/PokeInfo";
import ProfileContainer from "./containers/ProfileContainer/ProfileContainer";
import Main from "./Pages/Main/Main";
import profileImage from "./assets/Images/me.jpg";
import AddTeamContainer from "./containers/AddTeamContainer/AddTeamContainer";
import loadingScreen from "./assets/Images/pokeballBG2.gif";
import HomeContainer from "./containers/HomeContainer/HomeContainer";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [searchWord, setSearchWord] = useState("");
  const [filterPokemon, setFilterPokemon] = useState([]);
  const [teamName, setTeamName] = useState("");
  const [className, setClassName] = useState("App-logo");

  const getPokemon = async () => {
    const res = await fetch("http://localhost:8080/pokemon/");
    const data = await res.json();
    setPokemon(data);
  };

  const classNameChange = () => {
    setClassName("App-logoOpacity");
  };

  setTimeout(() => {
    classNameChange();
  }, 5000);

  useEffect(() => {
    getPokemon();
  }, []);

  const handleInput = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setSearchWord(cleanInput);

    if (searchWord !== "") {
      const newPokeArr = pokemon.filter((pokemon) => {
        return pokemon.name.toLowerCase().includes(searchWord);
      });
      setFilterPokemon(newPokeArr);
    } else {
      setFilterPokemon(pokemon);
    }
  };

  const handleTeamName = (event) => {
    const cleanInput = event.target.value.toLowerCase();
    setTeamName(cleanInput);
  };

 

  const userInfo = (
    <div>
      <p>"I live in the UK, living my best life with my pokemon"</p>
    </div>
  );

  return (
    <div className="App">
      <img src={loadingScreen} alt="wait until loaded" className={className} />
      <Router>
        <Routes>
          <Route
            path="/addTeam/"
            element={<AddTeamContainer pokeArr={searchWord.length < 1 ? pokemon : filterPokemon} handleTeamName={handleTeamName} />}
          ></Route>
          <Route
            path="/pokemon/:pokemonId"
            element={<PokeInfo pokeArr={searchWord.length < 1 ? pokemon : filterPokemon}  />}
          ></Route>
          <Route
            path="/profile/"
            element={
              <ProfileContainer
                userName={"Brooke"}
                userImage={profileImage}
                userInfo={userInfo}
                teamName={teamName}
                pokeArr={searchWord.length < 1 ? pokemon : filterPokemon}
              />
            }
          ></Route>
          <Route
            path="/pokedex/"
            element={<Main handleInput={handleInput} searchWord={searchWord} pokeArr={searchWord.length < 1 ? pokemon : filterPokemon} />}
          >
            {" "}
          </Route>
          <Route path="/" element={<HomeContainer pokeArr={searchWord.length < 1 ? pokemon : filterPokemon}/>}>{" "}</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
