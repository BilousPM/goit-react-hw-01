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

export default FrendListItem;
