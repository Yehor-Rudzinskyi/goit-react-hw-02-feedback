import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  container: {
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  button: {
    border: 'none',
    padding: '10px 15px',
    backgroundColor: 'teal',
    color: '#fff',
    fontWeight: 500,
    margin: 10,

    cursor: 'pointer',
    outline: 'none',
    boxShadow: '1px 2px 2px 0 rgb(0 0 0 / 0.5)',
  },
});

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      {options.map(option => (
        <button
          className={classes.button}
          key={option}
          type="button"
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;
