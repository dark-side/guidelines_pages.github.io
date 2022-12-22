import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";

import { theme } from "./theme";
import { Main } from "./pages/Main";
import './i18';
import { BASE_URL, routers } from './constant';
import { LangRedirect } from "./components/LangRedirect";

import '@fontsource/open-sans/300.css';
import '@fontsource/open-sans/500.css';
import '@fontsource/open-sans/700.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LangRedirect /> ,
  },
  {
    path: BASE_URL,
    element: <Main /> ,
  },
  {
    path: routers.category,
    element: <div>category</div>,
  },
]);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
