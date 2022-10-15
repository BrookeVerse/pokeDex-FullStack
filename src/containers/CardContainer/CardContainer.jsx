import "./CardContainer.scss";
import Card from "../../components/Card/Card";

const CardContainer = ({pokeArr}) => {
  const pokeCards = pokeArr.map((pokemon, index) => {
    return <Card key={index} pokemonImage={pokemon.image.thumbnail} pokemonId={pokemon.id}/>;
  });

  if (pokeCards.length === 0) {
    const pokeCard = (
      <div className="pokeCard__unAvailable">
        <h3>No Pokemon Available!</h3>
      </div>
    );
    return pokeCard;
  }
  return <div className="cardContainer">{pokeCards}</div>;
};

export default CardContainer;