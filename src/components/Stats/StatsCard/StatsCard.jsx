import css from './StatsCard.module.css';
import StatsTitle from '../StatsTitle/StatsTitle';
import StatsTypes from '../StatsTypes/StatsTypes';

const StatsCard = ({ statsData, title }) => {
  return (
    <div className={css.statsCard}>
      <StatsTitle title={title} />
      <StatsTypes stats={statsData} />
    </div>
  );
};

export default StatsCard;
