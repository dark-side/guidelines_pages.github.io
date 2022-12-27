import React, { useState } from 'react';
import { Box, styled, Tab, Tabs as MUITab } from "@mui/material";

const sxStyles = {
  tabPanel: (theme) => ({
    position: 'relative',

    '&:before': {
      content: '""',
      position: 'absolute',
      height: '1px',
      width: '100%',
      bottom: 0,
      backgroundColor: theme.palette.grey.A100,
    }
  }),
  tab: {
    minWidth: '65px',
    p: '0.5rem',
    minHeight: 'auto',
  },
  tabs: {
    minHeight: 'auto',
  }
};

export const Tabs = (props) => {
  const { tabTitles, tabContent } = props;

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
        <TabContent key={`${tabTitle}-content`} value={value} index={index}>
          {tabContent({ currentValue: value, setValue, index })}
        </TabContent>
      ))}

    </>
  );
}

function a11yProps(index) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  };
}

const StyledTabContent = styled('div', {
  shouldForwardProp: (prop) => prop !== 'isHidden',
})(({ isHidden }) => {
  if (isHidden) {
    return {
      position: 'absolute',
      top: '-100%',
      opacity: 0,
      visibility: 'hidden',
      width: 0,
      height: 0,
    }
  }

  return {}
});

function TabContent(props) {
  const { children, value, index, ...other } = props;
  const isHidden = value !== index;

  return (
    <StyledTabContent
      role="tabpanel"
      isHidden={isHidden}
      aria-hidden={isHidden ? "true" : "false"}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {children}
    </StyledTabContent>
  );
}
