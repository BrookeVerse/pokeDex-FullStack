import Profile from "../../components/Profile/Profile";
import "./ProfileContainer.scss";


const ProfileContainer = ({userName, userImage, userInfo, teamName, pokeTeam}) => {
  return (
    <div className="profileContainer">
        <Profile userName={userName} userImage={userImage} userInfo={userInfo} teamName={teamName} pokeTeam={pokeTeam}/>
    </div>
  )
}

export default ProfileContainer