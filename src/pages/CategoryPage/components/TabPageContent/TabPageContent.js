import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { getCategoryLink } from 'constant';
import { getNextEntity } from 'utils';
import { Tabs } from 'components/Tabs';

import { TabContent } from './TabContent';

export const TabPageContent = (props) => {
  const { category } = props;

  const { lang } = useParams();
  const navigate = useNavigate();
  const [nextCategory, setNextCategory] = useState();
  const { t } = useTranslation([category.title, 'main']);

  useEffect(() => {
    const nextItem = getNextEntity({ currentCategory: category });

    setNextCategory(nextItem);
  }, [category]);

  const handleNextItem = () => {
    if (nextCategory) {
      navigate(`/${getCategoryLink(lang, nextCategory.key)}`);
    }
  };

  const tabTitles = category.tabs.map(({ tabTitle }) => t(tabTitle, { ns: category.title }));

  return (
    <Tabs
      tabTitles={tabTitles}
      TabContent={TabContent}
      tabContentProps={{
        category,
        onNextItem: handleNextItem,
      }}
    />
  );
};

TabPageContent.propTypes = {
  category: PropTypes.shape({
    title: PropTypes.string.isRequired,
    tabs: PropTypes.arrayOf(
      PropTypes.shape({
        tabTitle: PropTypes.string.isRequired,
      }),
    ).isRequired,
  }).isRequired,
};
