import { Link } from "react-router-dom";
import "./Card.scss";

const Card = ({ pokemonImage, pokemonName, pokemonInfo, pokemonId }) => {
  return (
    <div className="pokeCard" name="card">
      <Link to={`/pokemon/${pokemonId}`}>
      <img src={pokemonImage} alt={pokemonName} className="pokeCard__img" name="cardImage" />
      </Link>
      <div>
        <h2 className="pokeCard__heading" name="title">
          {pokemonName} #{pokemonId}
          <hr></hr>
        </h2>
        <p className="pokeCard__content" name="description">
          {pokemonInfo}
        </p>
      </div>
    </div>
  );
};

export default Card;