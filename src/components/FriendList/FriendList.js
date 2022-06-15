import PropTypes from 'prop-types';
import s from './FriendList.module.css';
import FriendListItem from 'components/FriendsListItem/FriendListItem';

function FriendList({ friends }) {
  return (
    <ul className={s.friendList}>
      {friends.map(({ id, name, avatar, isOnline }) => (
        <FriendListItem
          key={id}
          name={name}
          avatar={avatar}
          isOnline={isOnline}
        />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendList;
