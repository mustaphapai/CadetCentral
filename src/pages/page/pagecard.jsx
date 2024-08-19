import PropTypes from 'prop-types';

const PageCard = ({ channelName }) => {
  return (
    <div>{channelName}</div>
  );
};

PageCard.propTypes = {
  channelName: PropTypes.string.isRequired,
};

export default PageCard;
