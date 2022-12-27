import React from 'react';
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

import { categoriesInfo } from "constant";
import { categoryTypes } from "constant/categories";
import { PageLayout } from "components/PageLayout";
import { Breadcrumbs } from "components/Breadcrumbs";
import { getBaseUrl } from "constant";

import { DefaultPageContent } from "./components/DefaultPageContent";
import { TabPageContent } from "./components/TabPageContent";

const sxStyles = {
  title: {
    mb: '2rem',
  },
};

export const CategoryPage = () => {
  const { lang, category } = useParams();

  const currentCat = categoriesInfo.find((c) => c.key === category) || {};

  const { t } = useTranslation([currentCat.title, 'main', 'common']);

  const breadcrumbs = [
    {
      label: t('home', { ns: 'common' }),
      url: `/${getBaseUrl(lang)}`,
    },
    {
      label: t(currentCat.title, { ns: 'main' })
    }
  ];

  const renderCategoryContent = () => {
    if (currentCat.type === categoryTypes.tab) {
      return (
        <TabPageContent category={currentCat} />
      );
    }

    return (
      <DefaultPageContent category={currentCat} />
    );
  }

  return (
    <PageLayout>
      <Breadcrumbs links={breadcrumbs} />

      <Typography sx={sxStyles.title} variant="h1" component="h1">
        {t(currentCat.title, { ns: 'main' })}
      </Typography>

      {renderCategoryContent()}
    </PageLayout>
  )
}
