import PropTypes from 'prop-types';
import FriendListItem from 'components/FriendsListItem/FriendListItem';

function FriendList({ friends }) {
  return (
    <ul class="friend-list">
      {friends.map(friend => (
        <div key={friend.id}>
          <FriendListItem
            id={friend.id}
            name={friend.name}
            avatar={friend.avatar}
          />
        </div>
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
