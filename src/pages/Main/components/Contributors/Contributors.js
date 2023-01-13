import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Typography } from '@mui/material';

import { contributors } from 'constant/contributors';

import { ContributorsCard } from './ContributorCard';
import { sxStyles } from './Contributors.styles';

export const Contributors = () => {
  const { t } = useTranslation('main');

  return (
    <Box sx={sxStyles.box}>
      <Typography component="h2" variant="h2" sx={sxStyles.title}>{t('contributorsTitle')}</Typography>

      <Box component="ul" sx={sxStyles.list}>
        {contributors.map((item) => (
          <ContributorsCard key={item.name} item={item} />
        ))}
      </Box>
    </Box>
  );
};
