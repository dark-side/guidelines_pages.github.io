import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { DEFAULT_VIDEO_OPTIONS, getCategoryLink } from "constant";
import { getNextEntity } from 'utils';
import { Container } from "components/Container";
import { VideoContent } from "components/VideoContent";
import { NextBlock } from "components/NextBlock";
import { Tabs } from "components/Tabs";

const sxStyles = {
  container: {
    maxWidth: '815px',
    p: 0,
    mt: '2.5rem'
  },
}

export const TabPageContent = (props) => {
  const { category } = props;

  const { lang } = useParams();
  const navigate = useNavigate();
  const [nextCategory, setNextCategory] = useState();
  const { t } = useTranslation([category.title, 'main']);

  useEffect(() => {
    const nextItem = getNextEntity({ currentCategory: category });

    setNextCategory(nextItem);
  },[category]);

  const handleNextItem = () => {
    if (nextCategory) {
      navigate(`/${getCategoryLink(lang, nextCategory.key)}`);
    }
  };

  const tabTitles = category.tabs.map(({ tabTitle }) => t(tabTitle, { ns: category.title }));

  const getVideoContent = (index) => ({
    ...category.tabs[index],
    title: category.title,
    videoId: t(category.tabs[index].videoId, { ns: category.title }),
  });

  return (
    <>
      <Tabs
        tabTitles={tabTitles}
        tabContent={(tabData) => {
          const isLatsItem = tabData.currentValue === category.tabs.length - 1;
          const nextEntity = getNextEntity({ currentCategory: category, tabIndex: tabData.currentValue });
          const nextCategoryTitle = t(nextEntity.title, { ns: isLatsItem ? 'main' : category.title });
          const nextCategoryVideoPreview = t(nextEntity.videoId, { ns: isLatsItem ? nextEntity.title : category.title });

          const handleNext = () => {
            if (isLatsItem) {
              handleNextItem();
              return;
            }

            tabData.setValue(tabData.currentValue + 1);
          }

          return (
            <Container sx={sxStyles.container}>
              <VideoContent
                playerOpts={DEFAULT_VIDEO_OPTIONS}
                content={getVideoContent(tabData.index)}
              />

              <NextBlock
                videoId={nextCategoryVideoPreview}
                onNext={handleNext}
                nextCategoryTitle={nextCategoryTitle}
              />
            </Container>
          )
        }}
      />
    </>
  )
}
