import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Box, Tab, Tabs as MUITab,
} from '@mui/material';

import { TabContentWrap } from './TabContentWrap';
import { sxStyles } from './Tabs.styles';

function a11yProps(index) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  };
}

export const Tabs = (props) => {
  const { tabTitles, TabContent, tabContentProps } = props;

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={sxStyles.tabPanel}>
        <MUITab value={value} onChange={handleChange} sx={sxStyles.tabs} aria-label="tabs">
          {tabTitles.map((tabTitle, index) => (
            <Tab key={tabTitle} label={tabTitle} value={index} sx={sxStyles.tab} {...a11yProps(index)} />
          ))}
        </MUITab>
      </Box>

      {tabTitles.map((tabTitle, index) => (
        <TabContentWrap key={`${tabTitle}-content`} value={value} index={index}>
          <TabContent
            tabData={{ currentValue: value, setValue, index }}
            {...tabContentProps}
          />
        </TabContentWrap>
      ))}
    </>
  );
};

Tabs.propTypes = {
  tabTitles: PropTypes.arrayOf(PropTypes.string).isRequired,
  TabContent: PropTypes.elementType.isRequired,
  tabContentProps: PropTypes.shape({}),
};
