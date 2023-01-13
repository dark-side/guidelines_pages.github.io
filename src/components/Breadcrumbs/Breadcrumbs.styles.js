export const sxStyles = {
  box: {
    display: 'flex',
    listStyleType: 'none',
    m: '1.5rem 0',
    p: 0,
  },
  link: (theme) => ({
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.grey[500],
    textDecoration: 'none',
    mr: '0.25rem',

    img: {
      mr: '0.5rem',
      mb: '0.25rem',
    },
  }),
};
