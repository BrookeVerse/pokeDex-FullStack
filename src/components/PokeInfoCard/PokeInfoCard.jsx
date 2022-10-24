import "./PokeInfoCard.scss";
import { Link } from "react-router-dom";
import blackCross from "../../assets/Images/black-cross.png";
import pokeball from "../../assets/Images/pokeballImg.png";
const pokeInfoCardCard = ({pokemons, updatePokemon, removePokemon}) => {
  return (
    <div className="pokeInfoCard">
      <div className="pokeInfoCard__container">
        <div className="pokeInfoCard__header">
          <h2 className="pokeCard__heading" name="title">
            {pokemons.name} #{pokemons.id}
          </h2>
          <div className="pokeInfoCard__types">{pokemons.type}</div>
        </div>
        <div className="pokeInfoCard__grid">
          <div className="pokeInfoCard__profile">
            <div className="pokeInfoCard__images">
              <img src={pokeball} alt="pokeball" className="pokeInfoCard__pokeball" />
              <img src={pokemons.hires} alt="" className="pokeInfoCard__pokeImg" />
            </div>
          </div>
          <div className="pokeInfoCard__description">
            <h2>Description</h2>
            <hr></hr>
            <p className="pokeCard__content" name="description">
              <p>
                {pokemons.height} {pokemons.weight}
              </p>
              {pokemons.description}
            </p>
            <button onClick={updatePokemon} value={pokemons.id}>
              Add To Team
            </button>
            <button onClick={removePokemon} value={pokemons.id}>
              Remove From Team
            </button>
          </div>
        </div>
        <Link to={"/"}>
          <img src={blackCross} alt="Esc Button" className="pokeInfoCard__cross" />
        </Link>
      </div>
    </div>
  );
};

export default pokeInfoCardCard;
