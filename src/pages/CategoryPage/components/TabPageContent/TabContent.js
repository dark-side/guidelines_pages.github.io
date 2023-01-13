import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import { getNextEntity } from 'utils';
import { DEFAULT_VIDEO_OPTIONS } from 'constant';
import { Container } from 'components/Container';
import { VideoContent } from 'components/VideoContent';
import { NextBlock } from 'components/NextBlock';

const sxStyles = {
  container: {
    maxWidth: '815px',
    p: 0,
    mt: '2.5rem',
  },
};

export const TabContent = (props) => {
  const { tabData, onNextItem, category } = props;

  const { t } = useTranslation([category.title, 'main']);

  const isLatsItem = tabData.currentValue === category.tabs.length - 1;
  const nextEntity = getNextEntity({ currentCategory: category, tabIndex: tabData.currentValue });
  const nextCategoryTitle = t(nextEntity.title, { ns: isLatsItem ? 'main' : category.title });
  const nextCategoryVideoPreview = t(nextEntity.videoId, { ns: isLatsItem ? nextEntity.title : category.title });

  const handleNext = () => {
    if (isLatsItem) {
      onNextItem();
      return;
    }

    tabData.setValue(tabData.currentValue + 1);

    window.scrollTo(0, 0);
  };

  const getVideoContent = (index) => ({
    ...category.tabs[index],
    title: category.title,
    videoId: t(category.tabs[index].videoId, { ns: category.title }),
  });

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
  );
};

TabContent.propTypes = {
  onNextItem: PropTypes.func.isRequired,

  category: PropTypes.shape({
    title: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired,
    tabs: PropTypes.arrayOf(
      PropTypes.shape({
        tabTitle: PropTypes.string.isRequired,
        videoId: PropTypes.string.isRequired,
      }),
    ).isRequired,
  }).isRequired,

  tabData: PropTypes.shape({
    index: PropTypes.number.isRequired,
    currentValue: PropTypes.number.isRequired,
    setValue: PropTypes.func.isRequired,
  }).isRequired,
};
