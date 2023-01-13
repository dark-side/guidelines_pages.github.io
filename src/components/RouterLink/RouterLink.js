import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const RouterLink = React.forwardRef((props, ref) => (
  <Link ref={ref} {...props} role={undefined} />
));

RouterLink.propTypes = {
  to: PropTypes.string.isRequired,
};
