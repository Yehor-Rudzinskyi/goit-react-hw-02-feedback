import PropTypes from 'prop-types';

const Notification = ({ message }) => {
  return <h2 style={{ color: 'teal' }}>{message}</h2>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
