import "./Home.scss";
import pokeLogo from "../../assets/Images/pokeLogo.png";

const Home = ({ pokemon }) => {
  return (
    <div className="home">
      <div className="home__header">
        <img src={pokeLogo} alt="logo" className="home__logo" />
        <h2 className="home__heading">Welcome To PikaDex</h2>
      </div>
      <p>This website can we used as a companion for your pokemon games, set your team and trainers</p>
      <div>
        <div className="home__card">
          <h2>Pokemon Of The Render</h2>
          <img src={pokemon.hires} alt="" className="home__pokePic"/>
          <h3>{pokemon.name}</h3>
          <p>{pokemon.type}</p>
          <p>{pokemon.description}</p>
        </div>
        <div>
          <p>This is how you use this site</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
