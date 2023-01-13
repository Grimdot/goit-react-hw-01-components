import css from './StatsCard.module.css';
import StatsTitle from '../StatsTitle/StatsTitle';
import StatsTypes from '../StatsTypes/StatsTypes';
import PropTypes from 'prop-types';

const StatsCard = ({ statsData, title }) => {
  return (
    <div className={css.statsCard}>
      <StatsTitle title={title} />
      <StatsTypes stats={statsData} />
    </div>
  );
};

export default StatsCard;

StatsCard.propTypes = {
  statsData: PropTypes.arrayOf(PropTypes.shape({})),
  title: PropTypes.string,
};
