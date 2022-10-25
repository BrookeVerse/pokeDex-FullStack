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
            <option value={""}>Pick Trainer</option>
            {userOptions}
          </select>
          <div className="profile__team">
            <label htmlFor="pokeTeam" className="profileHeader__teamName">
              {teamName}
            </label>
            <div className="profile__trainerInfo">
              <h2 className="profile__trainerName">{trainerInfo.trainer_name}</h2>
              <p className="profile__trainerGame">{trainerInfo.game_info}</p>
              <p className="profile__trainerNotes">{trainerInfo.description}</p>
              <div className="profile__team">{pokeTeam}</div>
              <button value={trainerInfo.id} onClick={handleDelete}>
                Delete Trainer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
