import "./RandomCard.scss";

const RandomCard = ({ pokemon }) => {
  return (
    <div className="randomCard">
      <div className="randomCard__container">
        <div className="randomCard__card">
          <div className="randomCard__imageBox">
            <img src={pokemon.hires} alt="" className="randomCard__pokePic" />
          </div>
          <div className="randomCard__contentBox">
            <h3>{pokemon.name}</h3>
            <p>{pokemon.type}</p>
            <p>{pokemon.description}</p>
          </div>
          <div className="randomCard__color">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RandomCard;
