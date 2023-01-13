import css from './StatsTypes.module.css';
import makeRandomColor from 'utils/makeRandomColor';
import PropTypes from 'prop-types';

const StatsTypes = ({ stats }) => {
  return (
    <ul className={css.typesList}>
      {stats.map(({ id, label, percentage }) => {
        return (
          <li
            key={id}
            style={{
              backgroundColor: makeRandomColor(),
            }}
            className={css.typeItem}
          >
            <span>{label}</span>
            <span>{percentage}%</span>
          </li>
        );
      })}
    </ul>
  );
};

export default StatsTypes;

StatsTypes.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};
