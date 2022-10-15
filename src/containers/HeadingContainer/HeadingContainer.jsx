import "./HeadingContainer.scss";
import Header from "../../components/Header/Header";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import profileImage from "../../assets/Images/me.jpg";

const HeadingContainer = ({ pokeArr }) => {
  const pokeTeam = pokeArr.slice(0, 6).map((pokemon, index) => {
    return <img key={index} src={pokemon.image.sprite} alt="Pokemon" className="profileHeader__team"/>;
  });
  return (
    <div className="headingContainer">
      <Header pageTitle={"PokeDex"} />
      <ProfileHeader userName={"Brooke"} userImage={profileImage} teamName={"Dark Thunder"} pokeTeam={pokeTeam} />
    </div>
  );
};

export default HeadingContainer;