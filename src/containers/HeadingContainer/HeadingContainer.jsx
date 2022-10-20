import "./HeadingContainer.scss";
import Header from "../../components/Header/Header";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import profileImage from "../../assets/Images/me.jpg";
import pokeLogo from "../../assets/Images/pokeLogo.png";

const HeadingContainer = ({ pokeArr }) => {
  const pokeTeam = pokeArr.slice(0, 6).map((pokemon, index) => {
    return <img key={index} src={pokemon.sprite} alt="Pokemon" className="profileHeader__team"/>;
  });
  return (
    <div className="headingContainer">
      <img src={pokeLogo} alt="Logo" className="headingContainer__logo"/>
      <Header pageTitle={"PikaDex"} />
      <ProfileHeader userName={"Brooke"} userImage={profileImage} teamName={"Dark Thunder"} pokeTeam={pokeTeam} />
    </div>
  );
};

export default HeadingContainer;