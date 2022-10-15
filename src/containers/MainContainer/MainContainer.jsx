import SearchBar from "../../components/SearchBar/SearchBar";
import CardContainer from "../CardContainer/CardContainer";
import "./MainContainer.scss";

const MainContainer = ({searchWord, handleInput, pokeArr}) => {
  return (
    <div className="mainContainer">
      <SearchBar searchWord={searchWord} handleInput={handleInput} />
      <CardContainer pokeArr={pokeArr} />
    </div>
  );
};

export default MainContainer;