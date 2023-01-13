import ProfileCard from './Profile/ProfileCard/ProfileCard';
import StatsCard from './Stats/StatsCard/StatsCard';
import FriendListCard from './FriendList/FriendListCard/FriendListCard';

import userInfo from '../data/user.json';
import statsData from '../data/data.json';
import friendsInfo from '../data/friends.json';
import transactionsData from '../data/transactions.json';
import TransactionsTable from './Transactions/TransactionsTable/TransactionsTable';

export const App = () => {
  return (
    <div>
      <ProfileCard
        username={userInfo.username}
        tag={userInfo.tag}
        location={userInfo.location}
        avatar={userInfo.avatar}
        stats={userInfo.stats}
      />
      <StatsCard statsData={statsData} title="Some title" />
      <FriendListCard friends={friendsInfo} />
      <TransactionsTable transactions={transactionsData} />
    </div>
  );
};
