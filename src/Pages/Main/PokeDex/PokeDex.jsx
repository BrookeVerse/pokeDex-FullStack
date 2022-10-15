import "./PokeDex.scss";

import HeadingContainer from "../../containers/HeadingContainer/HeadingContainer";
import MainContainer from "../../containers/MainContainer/MainContainer";

const PokeDex = ({ pokeArr, searchWord, handleInput }) => {
  return (
    <div>
      <HeadingContainer pokeArr={pokeArr} />
      <MainContainer searchWord={searchWord} handleInput={handleInput} pokeArr={pokeArr}/>
      
    </div>
  );
};

export default PokeDex;