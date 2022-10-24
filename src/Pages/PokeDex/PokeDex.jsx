import "./PokeDex.scss";

import HeadingContainer from "../../containers/HeadingContainer/HeadingContainer";
import MainContainer from "../../containers/MainContainer/MainContainer";
import NavBarContainer from "../../containers/NavBarContainer/NavBarContainer";

const PokeDex = ({ pokeArr, searchWord, handleInput }) => {
  const pokeTrainer = pokeArr.filter((pokemon) => pokemon.team == "trainer");
  return (
    <div className="pokeDex">
      <HeadingContainer pokeArr={pokeTrainer} />
      <div className="layout">
        <div className="Nav">
          <NavBarContainer />
        </div>
        <MainContainer searchWord={searchWord} handleInput={handleInput} pokeArr={pokeArr} />
      </div>
    </div>
  );
};

export default PokeDex;
