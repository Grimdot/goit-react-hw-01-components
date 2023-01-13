import css from './StatsList.module.css';
import PropTypes from 'prop-types';
import StatsItem from '../StatsItem/StatsItem';

const StatsList = ({ stats }) => {
  return (
    <ul className={css.statsList}>
      {stats.map(({ id, label, percentage }) => {
        return <StatsItem key={id} label={label} percentage={percentage} />;
      })}
    </ul>
  );
};

export default StatsList;

StatsList.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.shape({})),
};
