import css from './StatsTitle.module.css';

const StatsTitle = ({ title }) => {
  return title ? <h2 className={css.title}>{title}</h2> : <></>;
};

export default StatsTitle;
