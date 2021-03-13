import { createUseStyles } from 'react-jss';
import PropTypes from 'prop-types';

const useStyles = createUseStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: 400,
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: 20,
    backgroundColor: '#b0afa9',
    boxShadow:
      '0px 2px 1px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 1px 3px rgba(0, 0, 0, 0.12)',
    borderRadius: '0px 0px 6px 6px',
    color: '#fff',
  },
});

const Section = ({ title, children }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <h1>{title}</h1>
      {children}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Section;
