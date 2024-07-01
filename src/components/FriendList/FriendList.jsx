import FriendListItem from '../FrendListIttem/FrendListItem';
import s from './FriendList.module.css/';

const FriendList = ({ frends }) => {
  return (
    <ul className={s.wrapper}>
      {frends.map(frend => {
        return (
          <li key={frend.id}>
            <FriendListItem userData={frend} />
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;
