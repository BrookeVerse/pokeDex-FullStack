import "./ProfileHeader.scss";


const ProfileHeader = ({ userName, userImage, teamName, pokeTeam }) => {
  return (
    <div className="profileHeader">
      <img src={userImage} alt={userName + " profile image"} className="profileHeader__img" />
      <div>
        <h2 className="profileHeader__userName">{userName}</h2>
        <label htmlFor="pokeTeam" className="profileHeader__teamName">
          {teamName}
        </label>
        <div>{pokeTeam}</div>
      </div>
    </div>
  );
};

export default ProfileHeader;