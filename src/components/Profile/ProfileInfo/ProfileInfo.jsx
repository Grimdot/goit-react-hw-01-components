import css from './ProfileInfo.module.css';

const ProfileInfo = ({ username, tag, location, avatar }) => {
  return (
    <div className={css.description}>
      <img src={avatar} alt="user avatar" className={css.avatar} />
      <p className={css.name}>{username}</p>
      <p className={css.tag}>@{tag}</p>
      <p className={css.location}>{location}</p>
    </div>
  );
};

export default ProfileInfo;
