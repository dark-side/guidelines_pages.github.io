import { styled } from '@mui/material';

export const sxStyles = {
  tabPanel: (theme) => ({
    position: 'relative',

    '&:before': {
      content: '""',
      position: 'absolute',
      height: '1px',
      width: '100%',
      bottom: 0,
      backgroundColor: theme.palette.grey.A100,
    },
  }),
  tab: {
    minWidth: '65px',
    p: '0.5rem',
    minHeight: 'auto',
  },
  tabs: {
    minHeight: 'auto',
  },
};

export const StyledTabContent = styled('div', {
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
    };
  }

  return {};
});
