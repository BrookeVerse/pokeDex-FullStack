import "./Home.scss";
import pokeLogo from "../../assets/Images/pokeLogo.png";
import { Link } from "react-router-dom";
import RandomCard from "../RandomCard/RandomCard";

const Home = ({ pokemon }) => {
  return (
    <div className="home">
      <div className="home__header">
        <img src={pokeLogo} alt="logo" className="home__logo" />
        <h2 className="home__heading">Welcome To PikaDex</h2>
      </div>
      <div className="home__content">
        <div className="home__text">
          <p className="home__intro">This website can we used as a companion for your pokemon games, set your team and trainers</p>
          <p className="home__howTo">This is how you use this site</p>
          <Link to={"/pokedex/"}>
            <button>+</button>
          </Link>
        </div>
        <RandomCard pokemon={pokemon}/>
      </div>
    </div>
  );
};

export default Home;
