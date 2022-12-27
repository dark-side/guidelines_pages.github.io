import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";

import { theme } from "./theme";
import './i18';
import { BASE_URL, routers } from './constant';
import { LangRedirect } from "./components/LangRedirect";
import { Main } from "./pages/Main";
import { CategoryPage } from "./pages/CategoryPage";

import '@fontsource/open-sans/300.css';
import '@fontsource/open-sans/500.css';
import '@fontsource/open-sans/700.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LangRedirect /> ,
  },
  {
    path: 'guidelines_pages.github.io/',
    element: <LangRedirect /> ,
  },
  {
    path: BASE_URL,
    element: <Main /> ,
  },
  {
    path: routers.category,
    element: <CategoryPage /> ,
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
