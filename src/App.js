import React from 'react';
import {
  HashRouter,
  Route,
  Routes,
} from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';

import { theme } from './theme';
import './i18';
import { BASE_URL, routers } from './constant';
import { LangRedirect } from './components/LangRedirect';
import { Main } from './pages/Main';
import { CategoryPage } from './pages/CategoryPage';

import '@fontsource/open-sans/300.css';
import '@fontsource/open-sans/500.css';
import '@fontsource/open-sans/700.css';

const routeList = [
  {
    path: '/',
    element: <LangRedirect />,
  },
  {
    path: BASE_URL,
    element: <Main />,
  },
  {
    path: routers.category,
    element: <CategoryPage />,
  },
  {
    path: '*',
    element: <LangRedirect />,
  }
];

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HashRouter>
        <Routes>
          {routeList.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
