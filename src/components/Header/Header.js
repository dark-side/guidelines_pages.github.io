import React, { useEffect } from 'react';
import { Box, IconButton, Link } from "@mui/material";
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate, useParams } from "react-router-dom";

import { getBaseUrl, LANGS } from "constant";
import logoIcon from 'assets/images/logo.svg';
import langIcon from 'assets/images/lang.svg';

import { RouterLink } from "../RouterLink";
import { Container } from "../Container";

const sxStyles = {
  wrapHeader: (theme) => ({
    pt: '1.5rem',
    pb: '1.5rem',
    borderBottom: `1px solid ${theme.palette.grey.A100}`,
    position: 'sticky',
    top: 0,
    backgroundColor: 'white',
    zIndex: 1000,
  }),
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: (theme) => ({
    display: 'flex',
    gap: '0.5rem',
    textDecoration: 'none',

    '& > span': {
      width: 0,
      height: 0,
      opacity: 0,

      [theme.breakpoints.up('sm')]: {
        width: 'auto',
        height: 'auto',
        opacity: 1,
      },

      'span:first-of-type': {
        display: 'block',
        fontSize: '1.1rem',
        fontWeight: 'bold',
      },
      'span:last-of-type': {
        display: 'block',
        fontSize: '0.85rem'
      }
    }
  }),
  btn: {
    fontSize: '0.75rem',
    fontWeight: 700,
  },
  langBox: (theme) => ({
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.grey.A200,
  })
}

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
    const getLang = async (lang) => handleChangeLang({ target: { value: lang } }) ;

    if (lang === LANGS.ua) {
      void getLang(LANGS.ua);
    }
  }, []);

  return (
    <Box sx={sxStyles.wrapHeader}>
      <Container sx={sxStyles.header} component="header">
        <Link sx={sxStyles.logo} component={RouterLink} to={baseUrl}>
          <img src={logoIcon} alt="logo"/>

          <span>
              <span>Sports Hub - Playground</span>
              <span>Development Guidelines</span>
          </span>
        </Link>

        <Box sx={sxStyles.langBox}>
          <img src={langIcon} alt="change language icon"/>

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
  )
}
