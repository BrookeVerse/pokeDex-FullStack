import "./PokeInfoCard.scss";
import { Link } from "react-router-dom";
import blackCross from "../../assets/Images/black-cross.png";
const pokeInfoCardCard = ({ pokemons, updatePokemon, removePokemon }) => {
  return (
    <div className="pokeInfoCard">
      <div className="pokeInfoCard__container">
        <div className="pokeInfoCard__header">
          <h2 className="pokeCard__heading" name="title">
            {pokemons.name} #{pokemons.id}
          </h2>
          <Link to={"/"}>
            <img src={blackCross} alt="Esc Button" className="pokeInfoCard__cross" />
          </Link>
        </div>
        <p className="pokeInfoCard__types">
          {pokemons.height} {pokemons.weight}
        </p>
        <div className="pokeInfoCard__images">
          <img src={pokemons.hires} alt="" className="pokeInfoCard__pokeImg" />
        </div>
        <div className="pokeInfoCard__description">
          <hr></hr>
          <p className="pokeCard__content" name="description">
            <div className="pokeInfoCard__types">{pokemons.type}</div>
          </p>
          <p className="pokeInfoCard__info">{pokemons.description}</p>
          <div>
            <button onClick={updatePokemon} value={pokemons.id}>
              Add To Team
            </button>
            <button onClick={removePokemon} value={pokemons.id}>
              Remove From Team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default pokeInfoCardCard;
