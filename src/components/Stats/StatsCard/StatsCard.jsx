import css from './StatsCard.module.css';
import StatsList from '../StatsList/StatsList';
import PropTypes from 'prop-types';

const StatsCard = ({ statsData, title }) => {
  return (
    <section className={css.statsCard}>
      {title ? <h2 className={css.title}>{title}</h2> : <></>}

      <StatsList stats={statsData} title={title} />
    </section>
  );
};

export default StatsCard;

StatsCard.propTypes = {
  statsData: PropTypes.arrayOf(PropTypes.shape({})),
  title: PropTypes.string,
};
