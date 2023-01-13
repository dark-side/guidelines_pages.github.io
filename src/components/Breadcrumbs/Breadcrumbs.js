import React from 'react';
import PropTypes from 'prop-types';
import { Box, Link, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import homeIcon from 'assets/images/home.svg';

import { RouterLink } from '../RouterLink';

import { sxStyles } from './Breadcrumbs.styles';

export const Breadcrumbs = (props) => {
  const { links = [] } = props;

  const { t } = useTranslation('common');

  return (
    <Box component="ul" sx={sxStyles.box}>
      {links.map(({ url, label }, index) => {
        if (!url) {
          return (
            <Typography key="current" component="span" variant="body1">{label}</Typography>
          );
        }

        return (
          <Box component="li" key={url}>
            <Link sx={sxStyles.link} component={RouterLink} to={url}>
              {!index ? <img src={homeIcon} alt={`${t('home')}`} /> : null}

              <Typography component="span" variant="body1">
                {label}
                {' '}
                /
              </Typography>
            </Link>
          </Box>
        );
      })}
    </Box>
  );
};

Breadcrumbs.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
