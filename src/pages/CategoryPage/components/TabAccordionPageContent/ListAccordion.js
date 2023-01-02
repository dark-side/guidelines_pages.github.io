import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { VideoAccordion } from './VideoAccordion';

export const ListAccordion = (props) => {
  const {
    tabData,
    category,
    onNextCategory,
    accordionList,
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
