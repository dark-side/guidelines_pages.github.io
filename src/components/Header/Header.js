import React, { useEffect } from 'react';
import { Box, IconButton, Link } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import { getBaseUrl, LANGS } from 'constant';
import logoIcon from 'assets/images/logo.svg';
import langIcon from 'assets/images/lang.svg';

import { RouterLink } from '../RouterLink';
import { Container } from '../Container';
import { sxStyles } from './Header.styles';

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { lang } = useParams();
  const { i18n } = useTranslation();

  const baseUrl = `/${getBaseUrl(lang)}`;

  const handleChangeLang = async (event) => {
    const newLang = event.target.value;

    if (newLang !== LANGS.ua) {
      const path = location.pathname.replace(`/${LANGS.ua}`, `/${LANGS.en}`);

      await i18n.changeLanguage(newLang);

      navigate(path);

      return;
    }

    const path = location.pathname.replace(`/${LANGS.en}`, `/${LANGS.ua}`);

    await i18n.changeLanguage(newLang);

    navigate(path);
  };

  useEffect(() => {
    const getLang = async (currLang) => handleChangeLang({ target: { value: currLang } });

    if (lang === LANGS.ua) {
      void getLang(LANGS.ua);
    }
  }, []);

  return (
    <Box sx={sxStyles.wrapHeader}>
      <Container sx={sxStyles.header} component="header">
        <Link sx={sxStyles.logo} component={RouterLink} to={baseUrl}>
          <img src={logoIcon} alt="logo" />

          <span>
            <span>Sports Hub - Playground</span>
            <span>Development Guidelines</span>
          </span>
        </Link>

        <Box sx={sxStyles.langBox}>
          <img src={langIcon} alt="change language icon" />

          <IconButton
            size="small"
            sx={sxStyles.btn}
            onClick={handleChangeLang}
            aria-label="en"
            value={LANGS.en}
            color={lang === LANGS.en ? 'primary' : 'inherit'}
          >
            EN
          </IconButton>
          |
          <IconButton
            size="small"
            sx={sxStyles.btn}
            onClick={handleChangeLang}
            aria-label="ua"
            value={LANGS.ua}
            color={lang === LANGS.ua ? 'primary' : 'inherit'}
          >
            UA
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};
