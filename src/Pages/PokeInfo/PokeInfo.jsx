import "./PokeInfo.scss";

import blackCross from "../../assets/Images/black-cross.png";

const PokeInfo = () => {
  return (
    <article className="pokeInfo">
      <div className="pokeInfo__container">
        <img src={blackCross} alt="Esc Button" className="pokeInfo__cross" />
        <img src="*" alt="" className="pokeInfo__img" />
        <div className="pokeInfo__content">
          <h2 className="pokeCard__heading" name="title">
            Hello
            <hr></hr>
          </h2>
          <p className="pokeCard__content" name="description">
            description
          </p>
        </div>
      </div>
    </article>
  );
};

export default PokeInfo;