import { Link } from "react-router-dom";
import "./Card.scss";

const Card = ({ pokemonImage, pokemonName, pokemonInfo, pokemonId }) => {
  return (
    <div className="pokeCard" name="card">
      <Link to={`/pokemon/${pokemonId}`}>
      <img src={pokemonImage} alt={pokemonName} className="pokeCard__img" name="cardImage" />
      </Link>
    </div>
  );
};

export default Card;