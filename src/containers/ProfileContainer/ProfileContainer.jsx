import Profile from "../../components/Profile/Profile";
import NavBarContainer from "../NavBarContainer/NavBarContainer";
import HeadingContainer from "../HeadingContainer/HeadingContainer";
import "./ProfileContainer.scss";

const ProfileContainer = ({ userName, userImage, userInfo, teamName, pokeTeam, pokeArr }) => {
  return (
    <div className="profileContainer">
      <HeadingContainer pokeArr={pokeArr} />
      <div className="profileContainer__layout">
        <div className="profileContainer__nav">
          <NavBarContainer />
        </div>
        <Profile userName={userName} userImage={userImage} userInfo={userInfo} teamName={teamName} pokeTeam={pokeTeam} />
      </div>
    </div>
  );
};

export default ProfileContainer;
