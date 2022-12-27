import React from 'react';
import { useTranslation } from "react-i18next";
import { Box, Typography } from "@mui/material";

import { ContributorsCard } from "./ContributorCard";
import { contributors } from "../../../../constant/contributors";

const sxStyles = {
  box: (theme) => ({
    mb: '3rem',

    [theme.breakpoints.up('md')]: {
      mb: '6rem',
    },
  }),
  title: (theme) => ({
    mb: '2.5rem',
    textAlign: 'left',

    [theme.breakpoints.up('md')]: {
      mb: '4.5rem',
    },
  }),
  list: (theme) => ({
    listStyleType: 'none',
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '2rem',
    m: 0,
    p: 0,

    [theme.breakpoints.up('sm')]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },

    '@media (min-width:780px)': {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },


    '@media (min-width:1210px)': {
      gridTemplateColumns: 'repeat(4, 1fr)',
    },
  })
}

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
  )
}
