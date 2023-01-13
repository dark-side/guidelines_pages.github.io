import { styled } from '@mui/material';

export const sxStyles = {
  container: {
    maxWidth: 'calc(100% - 4rem)',
    p: 0,
    mt: '2.5rem',
  },
  accordionTitle: {
    display: 'flex',
    alignItems: 'center',
  },
};

export const StyledPlusIcon = styled('div', {
  shouldForwardProp: (prop) => prop !== 'isExpanded',
})(({ theme, isExpanded }) => ({
  position: 'relative',
  top: '3px',
  width: '10px',
  height: '10px',
  marginRight: '1rem',

  '&:after': {
    content: '""',
    position: 'absolute',
    width: '10px',
    height: '2px',
    backgroundColor: theme.palette.grey.A200,

  },

  '&:before': {
    content: isExpanded ? 'none' : '""',
    position: 'absolute',
    width: '10px',
    height: '2px',
    backgroundColor: theme.palette.grey.A200,
    transform: 'rotate(-90deg)',
  },
}));

export const StyledContent = styled('div', {
  shouldForwardProp: (prop) => prop !== 'isExpanded',
})(({ isExpanded }) => {
  let expandedStyles = {};

  if (isExpanded) {
    expandedStyles = {
      maxHeight: '1000px',
      visibility: 'visible',
    };
  }

  return {
    maxWidth: '815px',
    margin: '0 auto',
    maxHeight: 0,
    overflow: 'hidden',
    transition: 'max-height 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    visibility: isExpanded ? 'visible' : 'initial',
    ...expandedStyles,
  };
});
