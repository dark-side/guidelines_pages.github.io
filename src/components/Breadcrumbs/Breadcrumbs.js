import React from 'react';
import { Box, Link, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import homeIcon from 'assets/images/home.svg';

import { RouterLink } from "../RouterLink";

const sxStyles = {
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
  })
}

export const Breadcrumbs = (props) => {
  const { links = [] } = props;

  const { t } = useTranslation('common');


  return (
    <Box component="ul" sx={sxStyles.box}>
      {links.map(({ url, label }, index) => {
        if (!url) {
          return (
            <Typography key="current" component="span" variant="body1">{label}</Typography>
          )
        }

        return (
          <Box component="li" key={url}>
            <Link sx={sxStyles.link} component={RouterLink} to={url}>
              {!index ? <img src={homeIcon} alt={`${t('home')}`}/> : null}

              <Typography component="span" variant="body1">{label} /</Typography>
            </Link>
          </Box>
        )
      })}
    </Box>
  )
}
