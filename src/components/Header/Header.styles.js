export const sxStyles = {
  wrapHeader: (theme) => ({
    pt: '1.5rem',
    pb: '1.5rem',
    borderBottom: `1px solid ${theme.palette.grey.A100}`,
    position: 'sticky',
    top: 0,
    backgroundColor: 'white',
    zIndex: 1000,
  }),
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: (theme) => ({
    display: 'flex',
    gap: '0.5rem',
    textDecoration: 'none',

    '& > span': {
      width: 0,
      height: 0,
      opacity: 0,

      [theme.breakpoints.up('sm')]: {
        width: 'auto',
        height: 'auto',
        opacity: 1,
      },

      'span:first-of-type': {
        display: 'block',
        fontSize: '1.1rem',
        fontWeight: 'bold',
      },
      'span:last-of-type': {
        display: 'block',
        fontSize: '0.85rem',
      },
    },
  }),
  btn: {
    fontSize: '0.75rem',
    fontWeight: 700,
  },
  langBox: (theme) => ({
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.grey.A200,
  }),
};
