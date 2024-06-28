import Section from '../Section/Section';
import Profile from '../Profile/Profile';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import FriendList from '../FriendList/FriendList';
import transactions from '../../json-data-files/transactions.json';
import frends from '../../json-data-files/friends.json';
import userData from '../../json-data-files/userData.json';

const App = () => {
  return (
    <>
      <Section title="Task 1 - Social network profile">
        <Profile
          name={userData.username}
          tag={userData.tag}
          location={userData.location}
          image={userData.avatar}
          stats={userData.stats}
        />
      </Section>

      <Section title="Task 2 - List of friends">
        <FriendList frends={frends} />
      </Section>

      <Section title="Task 3 - History of transactions">
        <TransactionHistory items={transactions} />
      </Section>
    </>
  );
};

export default App;
