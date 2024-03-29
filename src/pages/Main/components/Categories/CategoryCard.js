import React from 'react';
import { Box, Link, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { RouterLink } from 'components/RouterLink';
import { getBaseUrl } from 'constant';
import arrowIcon from 'assets/images/link-arrow.svg';

const sxStyles = {
  item: (theme) => ({
    position: 'relative',
    backgroundColor: theme.palette.common.white,
    transition: 'background-color 0.3s',

    '&:hover': {
      'a:first-of-type': {
        color: theme.palette.common.white,
        backgroundColor: theme.palette.primary.black,
      },
      'a:last-of-type': {
        zIndex: 100,
      },
    },
  }),
  linkItem: (theme) => ({
    display: 'block',
    height: '100%',
    textDecoration: 'none',
    color: theme.palette.common.black,
    border: `1px solid ${theme.palette.grey.A100}`,
    p: '2rem',
    borderRadius: '0.25rem',

    img: {
      mb: '0.5rem',
      minHeight: '70px',
    },
  }),
  linkArrow: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    zIndex: -100,

    img: {
      display: 'block',
    },
  },
};

export const CategoryCard = (props) => {
  const { item } = props;
  const { key, title, icon } = item;

  const { lang } = useParams();
  const { t } = useTranslation('main');

  const link = `/${getBaseUrl(lang)}/${key}`;

  return (
    <Box component="li" sx={sxStyles.item}>
      <Link sx={sxStyles.linkItem} component={RouterLink} to={link}>
        <img src={icon} alt={`${t(key)}`} />

        <Typography component="h3" variant="h3">{t(title)}</Typography>
      </Link>

      <Link sx={sxStyles.linkArrow} component={RouterLink} to={link} target="_blank">
        <img src={arrowIcon} alt="link to category" />
      </Link>
    </Box>
  );
};
