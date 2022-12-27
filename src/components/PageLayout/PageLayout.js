import React from 'react';
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

import { ScrollToTop } from "hooks";

import { Header } from "../Header";
import { Container } from "../Container";

const sxStyles = {
  footer: {
    m: '1rem',
    textAlign: 'center',
  }
}

export const PageLayout = (props) => {
  const { children, sx } = props;

  return (
    <>
      <ScrollToTop />
      <Header />

      <Container component="main" sx={sx}>
        <Outlet />
        {children}
      </Container>

      <Box component="footer" sx={sxStyles.footer}>
        © {new Date().getFullYear()}
      </Box>
    </>
  )
}
