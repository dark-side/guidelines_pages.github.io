import React from 'react';
import YouTube from "react-youtube";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const sxStyles = {
  subTitle: {
    mb: '1rem',
  },
  desc: {
    m: '1.25rem 0 1.5rem'
  },
  linkList: {
    listStyleType: 'none',
    m: '0 0 1.5rem',
    p: 0,

    a: {
      ml: '0.25rem'
    }
  },
}

export const VideoContent = (props) => {
  const { playerOpts, content } = props;
  const { videoId, title, links = []  } = content;

  const { t } = useTranslation([title, 'common']);

  return (
    <>
      <YouTube
        className="video-box mb-24"
        videoId={videoId}
        opts={playerOpts}
      />

      <Typography sx={sxStyles.subTitle} variant="body2" fontWeight={700} component="h2">
        {t('videoTitle', { ns: 'common' })}
      </Typography>

      <Typography sx={sxStyles.desc} variant="body3" component="p">
        {t((content.videoDescription || 'videoDescription'), { ns: title })}
      </Typography>

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
