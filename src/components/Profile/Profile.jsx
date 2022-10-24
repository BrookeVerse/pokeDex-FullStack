import "./Profile.scss";

const Profile = ({ userName, onChange, userImage, handleDelete, userInfo, teamName, pokeTeam, trainerInfo, userOptions }) => {
  return (
    <div className="profile">
      <div className="profile__container">
        <img src={userImage} alt={userName} className="profile__image" />
        <h2 className="profile__heading">{userName}</h2>
        <p className="profile__userInfo">{userInfo}</p>
        <div className="profile__content">
          <hr></hr>
          <select name="teams" id="teams" onChange={onChange} className="profile__select">
            <option value={""} className="profile__option">Pick Trainer</option>
            {userOptions}
          </select>
          <div className="profile__team">
            <label htmlFor="pokeTeam" className="profileHeader__teamName">
              {teamName}
            </label>
            <h2>{trainerInfo.trainer_name}</h2>
            <p>{trainerInfo.game_info}</p>
            <p>{trainerInfo.description}</p>
            <div>{pokeTeam}</div>
            <button value={trainerInfo.id} onClick={handleDelete}>
              Delete Team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
