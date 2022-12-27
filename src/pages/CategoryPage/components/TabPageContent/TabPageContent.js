import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { categoriesInfo, DEFAULT_VIDEO_OPTIONS, getCategoryLink } from "constant";
import { getNextItemLevel } from "utils";
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
    const nextItem = getNextItemLevel(categoriesInfo, category);

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
          const isLatItem = tabData.currentValue === category.tabs.length - 1;
          const nextCategoryTitle = isLatItem ? t(nextCategory?.title, { ns: 'main' }) : t(category.tabs[tabData.currentValue + 1].tabTitle, { ns: category.title });
          const nextCategoryVideoPreview = isLatItem ? '' : t(category.tabs[tabData.currentValue + 1].videoId, { ns: category.title });

          const handleNext = () => {
            if (isLatItem) {
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
