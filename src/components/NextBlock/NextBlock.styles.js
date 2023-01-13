export const sxStyles = {
  box: (theme) => ({
    p: '1rem',
    backgroundColor: theme.palette.grey[100],
    borderRadius: '0.25rem',
    display: 'grid',
    gridTemplateColumns: 'auto',
    alignItems: 'center',

    '@media (min-width:380px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
      alignItems: 'center',
      gap: '0.5rem',
    },

    '@media (min-width:560px)': {
      gridTemplateColumns: 'auto auto 1fr',
      alignItems: 'center',
      gap: 0,
    },
  }),
  preview: {
    position: 'relative',
    display: 'block',
    cursor: 'pointer',

    '& img:first-of-type': {
      display: 'block',
      width: '100%',
    },
    '& img:last-of-type': {
      display: 'block',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },

    '@media (min-width:380px)': {
      '& img:first-of-type': {
        maxWidth: 'initial',
        height: 'auto',
      },
    },

    '@media (min-width:560px)': {
      display: 'inline-block',

      '& img:first-of-type': {
        maxWidth: '150px',
        height: '100px',
      },
    },
  },
  text: {
    m: '1rem auto',

    '@media (min-width:380px)': {
      gridArea: '1 / 2 / 3 / 3',
      ml: '2.5rem',
    },

  },
  btn: (theme) => ({
    position: 'relative',
    justifyContent: 'center',
    width: '100%',
    ml: 'auto',
    mr: '0.5rem',
    pr: '3.75rem',
    minWidth: '140px',

    '@media (min-width:560px)': {
      width: 'max-content',
      justifyContent: 'flex-start',
    },

    'span:first-of-type': {
      position: 'absolute',
      right: 0,
      top: 0,
      bottom: 0,
      padding: '0.75rem',
      m: '0',
      backgroundColor: theme.palette.primary.main,
      borderTopRightRadius: '0.25rem',
      borderBottomRightRadius: '0.25rem',
    },

    img: {
      display: 'block',
      maxWidth: '20px',
    },
  }),
};
