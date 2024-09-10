import PropTypes from 'prop-types';

const Message = ({ notification }) => {
  return (
    <>
      <div id="notificationHeader">
        {/* image is optional */}
        {notification.image && (
          <div id="imageContainer">
            <img src={notification.image} width={100} alt="Notification" />
          </div>
        )}
        <span>{notification.title}</span>
      </div>
      <div id="notificationBody">{notification.body}</div>
    </>
  );
};

// Adding PropTypes validation for the 'notification' prop
Message.propTypes = {
  notification: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};

export default Message;
