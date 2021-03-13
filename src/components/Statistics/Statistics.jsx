import { createUseStyles } from 'react-jss';
import PropTypes from 'prop-types';

const useStyles = createUseStyles({
  div: {
    '& p': {
      color: 'teal',
      textAlign: 'center',
    },
  },
});

const Statistics = ({
  good,
  neutral,
  bad,
  total = 0,
  positivePercentage = 0,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.div}>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <div style={{ fontWeight: 'bold' }}>
        <p>Total: {total}</p>
        <p>Positive Percentage: {positivePercentage}%</p>
      </div>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  totapositivePercentagel: PropTypes.number,
};

export default Statistics;
