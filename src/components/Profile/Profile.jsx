import "./Profile.scss";

const Profile = ({ userName, onChange, userImage, handleDelete, userInfo, teamName, pokeTeam, trainerInfo, userOptions }) => {
  return (
    <div className="profile">
      <div>
        <h2 className="profile__heading">{userName}</h2>
        <img src={userImage} alt={userName} className="profile__image" />
      </div>
      <div className="profile__content">
        <select name="teams" id="teams" onChange={onChange}>
          <option value={""}>Pick Trainer</option>
          {userOptions}
        </select>
        <p>{userInfo}</p>
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
  );
};

export default Profile;
