import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import { VideoAccordion } from './VideoAccordion';

export const ListAccordion = (props) => {
  const {
    tabData,
    category,
    accordionList,
    onNextCategory,
    onToggleAccordion,
  } = props;

  const { t } = useTranslation([category.title, 'main']);

  useEffect(() => () => {
    tabData.setValue(0);
    onToggleAccordion();
  }, []);

  const isLastTabItem = tabData.currentValue === category.tabs.length - 1;

  return (
    <>
      {category.tabs[tabData.index].list.map((listItem, index) => {
        const isLastItem = index === category.tabs[tabData.index].list.length - 1;

        const handleNextItem = () => {
          if (isLastItem) {
            if (category.tabs.length === tabData.currentValue + 1) {
              onNextCategory();

              return;
            }

            tabData.setValue(tabData.currentValue + 1);
            window.scrollTo(0, 0);

            const updatedList = {
              [category.tabs[tabData.index].list[index].itemTitle]: false,
              [category.tabs[tabData.index + 1].list[0].itemTitle]: true,
            };

            onToggleAccordion(updatedList);

            return;
          }

          const updatedList = {
            [category.tabs[tabData.index].list[index].itemTitle]: false,
            [category.tabs[tabData.index].list[index + 1].itemTitle]: true,
          };

          onToggleAccordion(updatedList);
        };

        const videoContent = {
          videoId: t(listItem.videoId, { ns: category.title }),
          title: category.title,
          links: listItem.links,
          videoDescription: listItem.videoDescription,
        };

        const isShowNextCategory = isLastTabItem && isLastItem;

        return (
          <VideoAccordion
            key={listItem.itemTitle}
            item={listItem}
            tabIndex={tabData.index}
            itemIndex={index}
            category={category}
            videoContent={videoContent}
            isExpanded={accordionList[listItem.itemTitle]}
            onToggle={onToggleAccordion}
            onNextItem={handleNextItem}
            isShowNextCategory={isShowNextCategory}
          />
        );
      })}
    </>
  );
};

ListAccordion.propTypes = {
  onNextCategory: PropTypes.func.isRequired,
  onToggleAccordion: PropTypes.func.isRequired,
  tabData: PropTypes.shape({
    index: PropTypes.number.isRequired,
    currentValue: PropTypes.number.isRequired,
    setValue: PropTypes.func.isRequired,
  }).isRequired,

  accordionList: PropTypes.shape({
    id: PropTypes.bool,
  }).isRequired,

  category: PropTypes.shape({
    title: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired,

    tabs: PropTypes.arrayOf(
      PropTypes.shape({
        tabTitle: PropTypes.string.isRequired,

        list: PropTypes.arrayOf(
          PropTypes.shape({
            itemTitle: PropTypes.string.isRequired,
            videoId: PropTypes.string.isRequired,
            videoDescription: PropTypes.string.isRequired,

            links: PropTypes.arrayOf(
              PropTypes.shape({
                link: PropTypes.string.isRequired,
                labelLink: PropTypes.string.isRequired,
              }),
            ).isRequired,
          }),
        ).isRequired,
      }),
    ).isRequired,
  }).isRequired,
};
