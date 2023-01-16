import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import YouTube from 'react-youtube';
import {
  Box, Button, Typography,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { StyledDescription, sxStyles } from './VideoContent.styles';

export const VideoContent = (props) => {
  const { playerOpts, content } = props;
  const { videoId, title, links = [] } = content;

  const { lang, category } = useParams();
  const descText = useRef();
  const [isShowHiddenTextBtn, setIsShowHiddenTextBtn] = useState(false);
  const [isHiddenText, setIsHideText] = useState(false);
  const { t } = useTranslation([title, 'common']);

  useEffect(() => {
    if (descText.current.clientHeight > 75) {
      setIsShowHiddenTextBtn(true);
      setIsHideText(true);

      return;
    }

    setIsShowHiddenTextBtn(false);
    setIsHideText(false);
  }, [content.videoDescription, lang, category]);

  const handleToggleHideText = () => {
    setIsHideText(!isHiddenText);
  };

  return (
    <>
      <YouTube
        className="video-box mb-24"
        videoId={videoId}
        opts={playerOpts}
      />

      <Typography sx={sxStyles.subTitle} variant="body2" fontWeight={700} component="h2">
        {t(content.videoTitle || 'videoTitle', { ns: title, defaultValue: '' })}
      </Typography>

      <Box sx={sxStyles.wrapDesc}>
        <StyledDescription ref={descText} isHiddenText={!isHiddenText} sx={sxStyles.desc} variant="body3" component="p">
          {t((content.videoDescription || 'videoDescription'), { ns: title })}
        </StyledDescription>

        {isShowHiddenTextBtn && (
          <Button variant="text" sx={sxStyles.textBtn} onClick={handleToggleHideText}>
            {isHiddenText ? t('showMore', { ns: 'common' }) : t('showLess', { ns: 'common' })}
          </Button>
        )}
      </Box>

      <Typography sx={sxStyles.subTitle} variant="body2" fontWeight={700} component="h2">
        {t('linksTitle', { ns: 'common' })}
      </Typography>

      <Box component="ul" sx={sxStyles.linkList}>
        {links.map(({ labelLink, link }) => (
          <Box component="li" key={labelLink}>
            <span>
              {t(labelLink, { ns: title })}
            </span>

            <a href={link} target="_blank" rel="noreferrer">
              {link}
            </a>
          </Box>
        ))}
      </Box>
    </>
  );
};

VideoContent.propTypes = {
  playerOpts: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
  }),
  content: PropTypes.shape({
    videoId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    links: PropTypes.arrayOf(PropTypes.shape({
      labelLink: PropTypes.string,
      link: PropTypes.string,
    })),
  }).isRequired,
};
