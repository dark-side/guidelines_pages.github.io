import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { categoriesInfo, getCategoryLink } from 'constant';
import { getNextItemLevel } from 'utils';
import { Tabs } from 'components/Tabs';

import { ListAccordion } from './ListAccordion';

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
  }, [category]);

  const handleToggleAccordion = (accordionState) => {
    if (!accordionState) {
      setAccordionList({});

      return;
    }

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
    <Tabs
      tabTitles={tabTitles}
      TabContent={ListAccordion}
      tabContentProps={{
        category,
        accordionList,
        onNextCategory: handleNextCategory,
        onToggleAccordion: handleToggleAccordion,
      }}
    />
  );
};

TabAccordionPageContent.propTypes = {
  category: PropTypes.shape({
    title: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired,
    tabs: PropTypes.arrayOf(
      PropTypes.shape({
        tabTitle: PropTypes.string.isRequired,
      }),
    ).isRequired,
  }).isRequired,
};
