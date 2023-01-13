import css from './FriendListCard.module.css';
import FriendInfo from '../FriendInfo/FriendInfo';
import PropTypes from 'prop-types';

const FriendListCard = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      <FriendInfo friends={friends} />
    </ul>
  );
};

export default FriendListCard;

FriendListCard.propType = {
  friends: PropTypes.arrayOf(PropTypes.shape({})),
};
