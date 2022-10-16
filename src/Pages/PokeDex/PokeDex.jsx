import "./PokeDex.scss";

import HeadingContainer from "../../containers/HeadingContainer/HeadingContainer";
import MainContainer from "../../containers/MainContainer/MainContainer";
import NavBarContainer from "../../containers/NavBarContainer/NavBarContainer";

const PokeDex = ({ pokeArr, searchWord, handleInput }) => {
  return (
    <div>
      <HeadingContainer pokeArr={pokeArr} />
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
