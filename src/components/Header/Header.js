import React from 'react';
import { Box, IconButton, Link } from "@mui/material";
import { useTranslation } from 'react-i18next';
import { useNavigate } from "react-router-dom";

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
    fontSize: '0.75rem'
  },
  langBox: (theme) => ({
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.grey.A200,
  })
}

export const Header = () => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  const handleChangeLang = async (event) => {
    await i18n.changeLanguage(event.target.value);
    // TODO change to dynamic router
    navigate(`/${event.target.value}`);
  }

  return (
    <Box sx={sxStyles.wrapHeader}>
      <Container sx={sxStyles.header} component="header">
        <Link sx={sxStyles.logo} component={RouterLink} to="/">
          <img src={logoIcon} alt="logo"/>

          <span>
              <span>Sports Hub - Playground</span>
              <span>Development Guidelines</span>
          </span>
        </Link>

        <Box sx={sxStyles.langBox}>
          <img src={langIcon} alt="change language icon"/>

          <IconButton size="small" sx={sxStyles.btn} onClick={handleChangeLang} aria-label="eng" value="en">
            EN
          </IconButton>
          |
          <IconButton size="small" sx={sxStyles.btn} onClick={handleChangeLang} aria-label="ua" value="ua">
            UA
          </IconButton>
        </Box>
      </Container>
    </Box>
  )
}
