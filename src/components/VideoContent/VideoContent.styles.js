import { styled, Typography } from '@mui/material';

export const sxStyles = {
  subTitle: {
    mb: '1rem',

    '&:empty': {
      display: 'none',
    },
  },
  wrapDesc: {
    m: '1.25rem 0 1.5rem',
  },
  linkList: {
    listStyleType: 'none',
    m: '0 0 1.5rem',
    p: 0,

    a: {
      ml: '0.25rem',
    },
  },
  textBtn: {
    p: 0,
    ml: '0.25rem',
    minHeight: 0,
    minWidth: 0,
    fontSize: 'inherit',
    lineHeight: 'inherit',
    textTransform: 'none',

    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
};

export const StyledDescription = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'isHiddenText',
})(({ isHiddenText }) => {
  let expandedStyles = {
    whiteSpace: 'pre-line',
  };

  if (!isHiddenText) {
    expandedStyles = {
      display: '-webkit-box',
      WebkitLineClamp: 3,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden',
      wordWrap: 'break-word',
    };
  }

  return {
    ...expandedStyles,
  };
});
