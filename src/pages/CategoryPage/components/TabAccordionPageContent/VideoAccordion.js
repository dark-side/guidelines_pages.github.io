import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { DEFAULT_VIDEO_OPTIONS } from 'constant';
import { getNextEntity } from 'utils';
import { Container } from 'components/Container';
import { VideoContent } from 'components/VideoContent';
import { NextBlock } from 'components/NextBlock';

import { StyledContent, StyledPlusIcon, sxStyles } from './VideoAccordion.styles';

export const VideoAccordion = (props) => {
  const {
    category,
    tabIndex,
    itemIndex,
    item,
    videoContent = {},
    isExpanded,
    onToggle,
    onNextItem,
    isShowNextCategory,
  } = props;

  const [nextCategory, setNextCategory] = useState({ videoId: '' });
  const { t } = useTranslation([category.title, nextCategory.title]);

  useEffect(() => {
    const nextItem = getNextEntity({ currentCategory: category, tabIndex, itemIndex });

    setNextCategory(nextItem);
  }, [category]);

  const handleToggle = () => {
    onToggle({ [item.itemTitle]: !isExpanded });
  };

  return (
    <Container sx={sxStyles.container}>
      <Box tabIndex="0" role="button" aria-expanded={isExpanded ? 'true' : 'false'} onClick={handleToggle}>
        <Box sx={sxStyles.accordionTitle}>
          <StyledPlusIcon isExpanded={isExpanded} />

          <Typography component="div">
            {t(item.itemTitle, { ns: category.title })}
          </Typography>
        </Box>

        <StyledContent isExpanded={isExpanded}>
          <Box sx={{ marginTop: '1rem' }}>
            <VideoContent
              playerOpts={DEFAULT_VIDEO_OPTIONS}
              content={videoContent}
            />
          </Box>

          <NextBlock
            videoId={
              t(nextCategory.videoId, {
                ns: isShowNextCategory ? nextCategory.title : category.title,
              })
            }
            onNext={onNextItem}
            nextCategoryTitle={t(nextCategory.title, {
              ns: isShowNextCategory ? 'main' : category.title,
            })}
          />
        </StyledContent>
      </Box>

    </Container>
  );
};

VideoAccordion.propTypes = {
  tabIndex: PropTypes.number.isRequired,
  itemIndex: PropTypes.number.isRequired,
  isExpanded: PropTypes.bool.isRequired,
  isShowNextCategory: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  onNextItem: PropTypes.func.isRequired,
  category: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,

  item: PropTypes.shape({
    itemTitle: PropTypes.string.isRequired,
  }).isRequired,

  videoContent: PropTypes.shape({
    videoId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    links: PropTypes.arrayOf(PropTypes.shape({
      labelLink: PropTypes.string,
      link: PropTypes.string,
    })),
  }).isRequired,
};
