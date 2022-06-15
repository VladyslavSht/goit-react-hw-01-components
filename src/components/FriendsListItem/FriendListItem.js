import PropTypes from 'prop-types';
import s from './FriendListItem.module.css';

function FriendListItem({ name, avatar, isOnline }) {
  return (
    <li className={s.item}>
      <span className={isOnline ? s.statusOn : s.statusOff}></span>
      <span className={s.status}></span>
      <img className={s.avatar} src={avatar} alt="User avatar" width="60" />
      <p className={s.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
