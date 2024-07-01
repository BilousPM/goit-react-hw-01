import defaultImage from '../../images/skeleton-6639547_1280.webp';
import s from './Profile.module.css';

const Profile = ({ name, tag, location, image = defaultImage, stats }) => {
  return (
    <div className={s.userCard}>
      <div className={s.userProfile}>
        <div className={s.imageWrapper}>
          <img src={image} alt="User avatar" className={s.image} />
        </div>
        <p className={s.title}>{name}</p>
        <p className={s.tag}>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={s.list}>
        <li>
          <span>Followers: </span>
          <span>{stats.followers}</span>
        </li>
        <li>
          <span>Views: </span>
          <span>{stats.views}</span>
        </li>
        <li>
          <span>Likes: </span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
