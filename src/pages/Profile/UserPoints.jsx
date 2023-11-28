import PropTypes from 'prop-types';

export const UserPoints = (props) => {
  const { userById } = props;

  if (userById.points < 100) {
    return <p>{userById.points} / 100</p>;
  } else if (userById.points < 200) {
    return <p>{userById.points} / 200</p>;
  } else if (userById.points < 300) {
    return <p>{userById.points} / 300</p>;
  } else {
    return <p>Level Max</p>;
  }
};

UserPoints.propTypes = {
  userById: PropTypes.object,
};
