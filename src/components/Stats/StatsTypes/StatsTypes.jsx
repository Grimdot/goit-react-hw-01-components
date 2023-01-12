import css from './StatsTypes.module.css';
import makeRandomColor from 'utils/makeRandomColor';

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
