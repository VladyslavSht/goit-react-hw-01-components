import PropTypes from 'prop-types';

function FriendListItem({ name, avatar, isOnline }) {
  return (
    <li class="item">
      <span class="status"></span>
      <img class="avatar" src={avatar} alt="User avatar" width="48" />
      <p class="name">{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default FriendListItem;
