import "./PokeInfo.scss";
import { Link, useParams } from "react-router-dom";

import blackCross from "../../assets/Images/black-cross.png";

const PokeInfo = ({ pokeArr }) => {
  const { pokemonId } = useParams();
  const pokemons = pokeArr.find((pokemon) => {
    return pokemon.id == pokemonId;
  });
  return (
    <article className="pokeInfo">
      <div className="pokeInfo__container">
        <Link to={"/"}>
        <img src={blackCross} alt="Esc Button" className="pokeInfo__cross" />
        </Link>
        <img src={pokemons.image.thumbnail} alt="" className="pokeInfo__img" />
        <div className="pokeInfo__content">
          <h2 className="pokeCard__heading" name="title">
            {pokemons.name.english} #{pokemons.id}
            <hr></hr>
          </h2>
          <p className="pokeCard__content" name="description">
            {pokemons.description}
          </p>
        </div>
      </div>
    </article>
  );
};

export default PokeInfo;
