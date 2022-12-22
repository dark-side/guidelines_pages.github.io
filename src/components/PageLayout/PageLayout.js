import React from 'react';
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import { Header } from "../Header";
import { Container } from "../Container";

const sxStyles = {
  grid: {
    display: 'grid',
    templateRows: 'auto 1fr auto',
  },
  footer: {
    m: '1rem',
    textAlign: 'center',
  }
}

export const PageLayout = (props) => {
  const { children, sx } = props;
  return (
    <Box sx={sxStyles.grid}>
      <Header />

      <Container component="main" sx={sx}>
        <Outlet />
        {children}
      </Container>

      <Box component="footer" sx={sxStyles.footer}>
        © {new Date().getFullYear()}
      </Box>
    </Box>
  )
}
