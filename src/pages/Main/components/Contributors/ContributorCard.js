import React from 'react';
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const sxStyles = {
  item: (theme) =>({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    position: 'relative',
    backgroundColor: theme.palette.common.white,
    transition: 'background-color 0.3s',
    border: `1px solid ${theme.palette.grey.A100}`,

    '&:hover': {
      color: theme.palette.common.white,
      backgroundColor: theme.palette.primary.black,

      '& > div:first-of-type:before': {
        content: '""'
      },

      '& > div:last-of-type': {
        '& > p': {
          zIndex: 100,
          opacity: 1,
          height: 'auto',
          color: theme.palette.common.white,
          position: 'absolute',
          top: 0,

          [theme.breakpoints.up('sm')]: {
            position: 'static',
          },
        },

        img: {
          zIndex: -100,
          opacity: 0,
          height: 'auto',
          position: 'relative',

          [theme.breakpoints.up('sm')]: {
            position: 'absolute',
            height: 0,
          },
        }
      }
    },
  }),
  shortInfo: {
    position: 'relative',
    p: '1.5rem 0.5rem 3rem',

    '&:before': {
      content: 'none',
      zIndex: 101,
      position: 'absolute',
      bottom: '10px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '28px',
      height: '4px',
      backgroundColor: 'white',
    }
  },
  moreInfo: (theme) => ({
    flex: '1 0 auto',
    position: 'relative',

    '& > p': {
      p: '1.5rem',
      textAlign: 'center',
      zIndex: -100,
      opacity: 0,
      position: 'absolute',

      [theme.breakpoints.up('sm')]: {
        position: 'relative',
      },
    },

    img: {
      position: 'relative',
      bottom: 0,
      display: 'block',
      width: '100%',
      maxWidth: '100%',

      [theme.breakpoints.up('sm')]: {
        position: 'absolute',
      },
    },
  }),
}

export const ContributorsCard = (props) => {
  const { item } = props;
  const { photo, name, position, description } = item;

  const { t } = useTranslation('main');

  return (
    <Box component="li" sx={sxStyles.item}>
      <Box sx={sxStyles.shortInfo}>
        <Typography variant="h3" component="div" align="center">{t(name)}</Typography>
        <Typography variant="body1" component="div" align="center">{t(position)}</Typography>
      </Box>

      <Box sx={sxStyles.moreInfo}>
        <img src={photo} alt={t(name)} />

        <Typography>{t(description)}</Typography>
      </Box>
    </Box>
  )
}
