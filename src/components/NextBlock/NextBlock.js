import React from 'react';
import { Box, Button, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import arrowIcon from 'assets/images/r-arrow.svg';
import playIcon from 'assets/images/play.svg';

import { sxStyles } from "./NextBlock.styles";

export const NextBlock = (props) => {
  const { videoId, nextCategoryTitle, onNext } = props;

  const { t } = useTranslation('common');

  if (!nextCategoryTitle) {
    return null;
  }

  return (
    <Box sx={sxStyles.box}>
      <Box sx={sxStyles.preview} onClick={onNext}>
        <img src={`https://i.ytimg.com/vi_webp/${videoId}/mqdefault.webp`} alt="video thumbnail" />

        <img src={playIcon} alt="play icon"/>
      </Box>

      <Box sx={sxStyles.text}>
        <Typography component="span" variant="h3" fontWeight={500}>
          {t('next')}:
        </Typography>
        &nbsp;
        <Typography component="span" variant="h3" fontWeight={700}>
          {nextCategoryTitle}
        </Typography>
      </Box>

      <Button
        sx={sxStyles.btn}
        onClick={onNext}
        variant="contained"
        size="large"
        endIcon={<img src={arrowIcon} alt="watch"/>}
      >
        {t('watch')}
      </Button>
    </Box>
  )
}
