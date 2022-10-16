import "./Profile.scss";

const Profile = ({userName, userImage, userInfo, teamName, pokeTeam}) => {
  return (
    <div className="profile">
        <h2>{userName}</h2>
        <img src={userImage} alt={userName} />
        <p>{userInfo}</p>
        <label htmlFor="pokeTeam" className="profileHeader__teamName">
          {teamName}
        </label>
        <div>{pokeTeam}</div>
    </div>
  )
}

export default Profile