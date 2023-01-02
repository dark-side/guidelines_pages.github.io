import React, { useEffect, useRef, useState } from 'react';
import YouTube from "react-youtube";
import { Box, Button, styled, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const sxStyles = {
  subTitle: {
    mb: '1rem',

    '&:empty': {
      display: 'none',
    }
  },
  wrapDesc: {
    m: '1.25rem 0 1.5rem',
  },
  linkList: {
    listStyleType: 'none',
    m: '0 0 1.5rem',
    p: 0,

    a: {
      ml: '0.25rem'
    }
  },
  textBtn: {
    p: 0,
    ml: '0.25rem',
    minHeight: 0,
    minWidth: 0,
    fontSize: 'inherit',
    lineHeight: 'inherit',
    textTransform: 'none',

    '&:hover': {
      backgroundColor: 'transparent'
    }
  }
}

const StyledDescription = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'isHiddenText',
})(({ isHiddenText }) => {
  let expandedStyles = {};

  if (!isHiddenText) {
    expandedStyles = {
      display: '-webkit-box',
      WebkitLineClamp: 3,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden',
      wordWrap: 'break-word',
    };
  }

  return {
    ...expandedStyles,
  }
});


export const VideoContent = (props) => {
  const { playerOpts, content } = props;
  const { videoId, title, links = []  } = content;

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

    return () => {
      setIsShowHiddenTextBtn(false);
      setIsHideText(false);
    }
  },[content.videoDescription]);

  const handleToggleHideText = () => {
    setIsHideText(!isHiddenText);
  }

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
        <StyledDescription ref={descText} isHiddenText={!isHiddenText} sx={sxStyles.desc}  variant="body3" component="p">
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

            <a href={link} target="_blank"  rel="noreferrer">
              {link}
            </a>
          </Box>
        ))}
      </Box>
    </>
  )
}
