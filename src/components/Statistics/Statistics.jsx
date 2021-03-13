import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  div: {
    '& p': {
      color: 'teal',
      textAlign: 'center',
    },
  },
});

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
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

export default Statistics;
