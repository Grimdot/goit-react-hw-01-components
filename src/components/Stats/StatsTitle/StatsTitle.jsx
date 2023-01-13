import css from './StatsTitle.module.css';
import PropTypes from 'prop-types';

const StatsTitle = ({ title }) => {
  return title ? <h2 className={css.title}>{title}</h2> : <></>;
};

export default StatsTitle;

StatsTitle.propTypes = {
  title: PropTypes.string,
};
