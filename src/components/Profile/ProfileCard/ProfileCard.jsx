import css from './ProfileCard.module.css';
import ProfileInfo from '../ProfileInfo/ProfileInfo';
import ProfileStats from '../ProfileStats/ProfileStats';

const ProfileCard = ({ userInfo }) => {
  const { username, tag, location, avatar, stats } = userInfo;
  return (
    <div className={css.profileCard}>
      <ProfileInfo
        avatar={avatar}
        tag={tag}
        username={username}
        location={location}
      />
      <ProfileStats
        likes={stats.likes}
        views={stats.views}
        followers={stats.followers}
      />
    </div>
  );
};

export default ProfileCard;
