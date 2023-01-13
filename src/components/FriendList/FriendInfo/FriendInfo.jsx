import css from './FriendInfo.module.css';
import PropTypes from 'prop-types';

const FriendCard = ({ friends }) => {
  return friends.map(({ id, name, isOnline, avatar }) => {
    return (
      <li className={css.friendItem} key={id}>
        <span
          className={`${isOnline ? css.online : css.offline} ${css.status}`}
        ></span>
        <img src={avatar} alt="User avatar" width="48" className={css.avatar} />
        <p className={css.name}>{name}</p>
      </li>
    );
  });
};

export default FriendCard;

FriendCard.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      avatar: PropTypes.string,
    })
  ),
};
