import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { categoriesInfo, DEFAULT_VIDEO_OPTIONS, getCategoryLink } from "constant";
import { getNextItemLevel } from "utils";
import { Container } from "components/Container";
import { VideoContent } from "components/VideoContent";
import { NextBlock } from "components/NextBlock";

const sxStyles = {
  container: {
    maxWidth: '815px',
    p: 0,
  },
}

export const DefaultPageContent = (props) => {
  const { category } = props;

  const { lang } = useParams();
  const navigate = useNavigate();
  const [nextCategory, setNextCategory] = useState();
  const { t } = useTranslation([category.title, 'main']);

  useEffect(() => {
    const nextItem = getNextItemLevel(categoriesInfo, category);

    setNextCategory(nextItem);
  },[category]);

  const handleNextCategory = () => {
    if (nextCategory) {
      navigate(`/${getCategoryLink(lang, nextCategory.key)}`);
    }
  };

  const videoContent = { ...category, videoId: t('videoId', { ns: category.title }) };

  const nextCategoryTitle = nextCategory ? t(nextCategory.title, { ns: 'main' }) : '';

  return (
    <Container sx={sxStyles.container}>
      <VideoContent
        playerOpts={DEFAULT_VIDEO_OPTIONS}
        content={videoContent}
      />

      <NextBlock
        videoId={t('videoId', { ns: category.title })}
        onNext={handleNextCategory}
        nextCategoryTitle={nextCategoryTitle}
      />
    </Container>
  )
}
