import React from 'react';
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import bannerBg from 'assets/images/banner-bg.png';

const sxStyles = {
  banner: {
    minHeight: '440px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    mb: '2.5rem',
    backgroundImage: `url(${bannerBg})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 100%',
    backgroundSize: 'contain',
  },
  title: {
    textAlign: 'center',
    m: '0 1rem 1.5rem',
  },
  subtitle: {
    textAlign: 'center',
    maxWidth: '590px',
    mx: 'auto',
    whiteSpace: 'pre-line',
  },
};

export const Banner = () => {
  const { t } = useTranslation('main');

  return (
    (
      <Box sx={sxStyles.banner}>
        <Typography sx={sxStyles.title} variant="h1" component="h1">
          {t('title')}
        </Typography>

        <Typography sx={sxStyles.subtitle} variant="h3" fontWeight={400} color="text.secondary">
          {t('subTitle')}
        </Typography>
      </Box>
    )
  );
};
