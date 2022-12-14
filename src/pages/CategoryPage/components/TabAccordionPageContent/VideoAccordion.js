import React, { useEffect, useState } from 'react';
import { Box, styled, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { DEFAULT_VIDEO_OPTIONS } from 'constant';
import { getNextEntity } from 'utils';
import { Container } from 'components/Container';
import { VideoContent } from 'components/VideoContent';
import { NextBlock } from 'components/NextBlock';

const sxStyles = {
  container: {
    maxWidth: 'calc(100% - 4rem)',
    p: 0,
    mt: '2.5rem'
  },
  accordionTitle: {
    display: 'flex',
    alignItems: 'center',
  }
};

const StyledPlusIcon = styled('div', {
  shouldForwardProp: (prop) => prop !== 'isExpanded',
})(({ theme, isExpanded }) => ({
  position: 'relative',
  top: '3px',
  width: '10px',
  height: '10px',
  marginRight: '1rem',

  '&:after': {
    content: '""',
    position: 'absolute',
    width: '10px',
    height: '2px',
    backgroundColor: theme.palette.grey.A200,

  },

  '&:before': {
    content: isExpanded ? 'none' : '""',
    position: 'absolute',
    width: '10px',
    height: '2px',
    backgroundColor: theme.palette.grey.A200,
    transform: 'rotate(-90deg)',
  }
}));

const StyledContent = styled('div', {
  shouldForwardProp: (prop) => prop !== 'isExpanded',
})(({ theme, isExpanded }) => {
  let expandedStyles = {};

  if (isExpanded) {
    expandedStyles = {
      maxHeight: '1000px',
      visibility: 'visible',
    };
  }

  return {
    maxWidth: '815px',
    margin: '0 auto',
    maxHeight: 0,
    overflow: 'hidden',
    transition: 'max-height 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    visibility: isExpanded ? 'visible' : 'initial',
    ...expandedStyles,
  }
});


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

  const [nextCategory, setNextCategory] = useState({});
  const { t } = useTranslation([category.title, nextCategory.title]);

  useEffect(() => {
    const nextItem = getNextEntity({ currentCategory: category, tabIndex, itemIndex  });

    setNextCategory(nextItem);
  },[category]);

  const handleToggle = () => {
    onToggle({ [item.itemTitle]: !isExpanded });
  };

  return (
    <Container sx={sxStyles.container}>
      <Box tabIndex="0" role="button" aria-expanded={isExpanded ? "true" : "false"} onClick={handleToggle} >
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
            videoId={t(nextCategory?.videoId, { ns: isShowNextCategory ? nextCategory.title : category.title })}
            onNext={onNextItem}
            nextCategoryTitle={t(nextCategory?.title, { ns: isShowNextCategory ? 'main' : category.title })}
          />
        </StyledContent>
      </Box>

    </Container>
  )
}
