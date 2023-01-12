import ProfileCard from './Profile/ProfileCard/ProfileCard';
import StatsCard from './Stats/StatsCard/StatsCard';
import userInfo from '../data/user.json';
import statsData from '../data/data.json';

export const App = () => {
  return (
    <div>
      <ProfileCard userInfo={userInfo} />
      <StatsCard statsData={statsData} title="Some title" />
    </div>
  );
};
