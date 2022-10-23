import "./Home.scss";
import pokeLogo from "../../assets/Images/pokeLogo.png";
import { Link } from "react-router-dom";
import RandomCard from "../RandomCard/RandomCard";
import { ImArrowRight2 } from "react-icons/im";

const Home = ({ pokemon }) => {
  return (
    <div className="home">
      <div className="home__header">
        <img src={pokeLogo} alt="logo" className="home__logo" />
        <h2 className="home__heading">Welcome To PikaDex</h2>
      </div>
      <div className="home__content">
        <div className="home__text">
          <p className="home__intro">
            Welcome to PikaDex, we have created this site for people to be able to keep track of thier pokemon games, trainers and what pokemon is in
            your current team. If you just want to search through the pokedex, or you want to keep track of your games this is the site for you!
          </p>

          <ul className="home__list">
            <li> Pokedex page to search through and add pokemon to your team.</li>
            <li> Team page to create your trainer profile.</li>
            <li> Profile page, to look through your trainer profiles, or delete them.</li>
          </ul>

          <p className="home__buttonText">Let's Catch um all!</p>
          <Link to={"/pokedex/"}>
            <div className="home__button">
              <ImArrowRight2 />
            </div>
          </Link>
        </div>
        <div className="home__card">
        <RandomCard pokemon={pokemon} />
        </div>
      </div>
    </div>
  );
};

export default Home;
