import PropTypes from 'prop-types';
import s from './FrendListItem.module.css';

const FrendListItem = ({ userData }) => {
  return (
    <div className={s.wrapper}>
      <img src={userData.avatar} alt="Avatar" width="100" />
      <p>{userData.name}</p>
      <p className={userData.isOnline ? s.green : s.red}>
        {userData.isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
};

FrendListItem.propTypes = {
  userdata: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};

export default FrendListItem;
