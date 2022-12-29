import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { categoriesInfo, DEFAULT_VIDEO_OPTIONS, getCategoryLink } from "constant";
import { getNextItemLevel } from "utils";
import { Tabs } from "components/Tabs";

import { ListAccordion } from './ListAccordion';

const sxStyles = {
  container: {
    maxWidth: '815px',
    p: 0,
    mt: '2.5rem'
  },
}

export const TabAccordionPageContent = (props) => {
  const { category } = props;

  const { lang } = useParams();
  const navigate = useNavigate();
  const [nextCategory, setNextCategory] = useState();

  const [accordionList, setAccordionList] = useState({});

  const { t } = useTranslation([category.title, 'main']);

  useEffect(() => {
    const nextItem = getNextItemLevel(categoriesInfo, category);

    setNextCategory(nextItem);
  },[category]);

  const handleToggleAccordion = (accordionState) => {
    if (!accordionState) {
      setAccordionList({});

      return;
    };

    setAccordionList((prevState) => ({
      ...prevState,
      ...accordionState,
    }));
  };

  const handleNextCategory = () => {
    if (nextCategory) {
      navigate(`/${getCategoryLink(lang, nextCategory.key)}`);
    }
  };

  const tabTitles = category.tabs.map(({ tabTitle }) => t(tabTitle, { ns: category.title }));

  return (
    <>
      <Tabs
        tabTitles={tabTitles}
        tabContent={(tabData) => (
          <ListAccordion
            tabData={tabData}
            category={category}
            onNextCategory={handleNextCategory}
            accordionList={accordionList}
            onToggleAccordion={handleToggleAccordion}
          />
        )}
      />
    </>
  )
}
