import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { sxStyles } from './ContributorsCard.styles';

export const ContributorsCard = (props) => {
  const { item } = props;
  const {
    photo, name, position, description,
  } = item;

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
  );
};

ContributorsCard.propTypes = {
  item: PropTypes.shape({
    photo: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};
