import "./SearchBar.scss";

const SearchBar = ({ searchWord, handleInput }) => {
  return (
    <div className="searchBar">
      <form className="searchBar__form">
        <input type="text" placeholder="Gotta Catch Them All..." value={searchWord} onInput={handleInput} className="searchBar__input" />
      </form>
    </div>
  );
};

export default SearchBar;