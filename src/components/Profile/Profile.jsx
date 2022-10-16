import "./Profile.scss";
import { ImPencil } from "react-icons/im";
import { Link } from "react-router-dom";

const Profile = ({ userName, userImage, userInfo, teamName, pokeTeam }) => {
  return (
    <div className="profile">
      <div>
          <ImPencil className="profile__pencil" />
        <h2 className="profile__heading">{userName}</h2>
        <img src={userImage} alt={userName} className="profile__image" />
      </div>
      <div className="profile__content">
        <p>{userInfo}</p>
        <div className="profile__team">
          <label htmlFor="pokeTeam" className="profileHeader__teamName">
            {teamName}
          </label>
          <div>{pokeTeam}</div>
          <Link to={"/profile/addTeam"}>
          <button>Add Team</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
