import PokeDex from "../PokeDex/PokeDex";
import "./Main.scss";

const Main = ({ pokeArr, searchWord, handleInput }) => {
  
  return (
    <div>
      <PokeDex pokeArr={pokeArr} searchWord={searchWord} handleInput={handleInput}/>
    </div>
  );
};

export default Main;