import React from 'react';
import PropTypes from 'prop-types';

import { StyledTabContent } from './Tabs.styles';

export const TabContentWrap = (props) => {
  const {
    children, value, index, ...other
  } = props;

  const isHidden = value !== index;

  return (
    <StyledTabContent
      role="tabpanel"
      isHidden={isHidden}
      aria-hidden={isHidden ? 'true' : 'false'}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {children}
    </StyledTabContent>
  );
};

TabContentWrap.propTypes = {
  value: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};
