import "./SearchBar.scss";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ searchWord, handleInput }) => {
  return (
    <div className="searchBar">
      <form className="searchBar__form">
        <input type="text" placeholder="Gotta Catch Them All..." value={searchWord} onInput={handleInput} className="searchBar__input" />
        <FaSearch />
      </form>
    </div>
  );
};

export default SearchBar;
