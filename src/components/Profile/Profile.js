import PropTypes from 'prop-types';
import s from './Profile.module.css';

function Profile({ username, tag, location, avatar, stats }) {
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img src={avatar} alt="User avatar" width="320" className={s.avatar} />
        <p class="name">{username}</p>
        <p class="tag">@{tag}</p>
        <p class="location">{location}</p>
      </div>

      <ul className={s.stats}>
        <li>
          <span className={s.label}>Followers</span>
          <span class="quantity">{stats.followers}</span>
        </li>
        <li>
          <span className={s.label}>Views</span>
          <span class="quantity">{stats.views}</span>
        </li>
        <li>
          <span className={s.label}>Likes</span>
          <span class="quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;
