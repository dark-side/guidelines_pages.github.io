import { categoryTypes } from 'constant/categories';
import { categoriesInfo } from 'constant';

export const getNextItemLevel = (list, currentItem) => {
  const currentIndexItem = list.findIndex((item) => item.key === currentItem.key);
  const nextItem = list[currentIndexItem + 1];

  if (!nextItem) {
    return undefined;
  }

  return nextItem;
};

const getNextCategoryData = (nextCategory) => {
  if (nextCategory.type === categoryTypes.tabAccordion) {
    return {
      key: nextCategory.key,
      title: nextCategory.title,
      videoId: nextCategory.tabs[0].list[0].videoId,
    };
  }

  if (nextCategory.type === categoryTypes.tab) {
    return {
      key: nextCategory.key,
      title: nextCategory.title,
      videoId: nextCategory.tabs[0].videoId,
    };
  }

  return {
    key: nextCategory.key,
    title: nextCategory.title,
    videoId: nextCategory.videoId,
  };
};
const getNextTabData = (nextCategory) => ({
  key: nextCategory.key,
  title: nextCategory.tabTitle,
  videoId: nextCategory.videoId,
});
const getNextItemData = (nextCategory) => ({
  key: nextCategory.key,
  title: nextCategory.itemTitle,
  videoId: nextCategory.videoId,
});

const getNextCategory = (categoryKey, list) => {
  const currentIndexItem = list.findIndex((item) => item.key === categoryKey);
  const nextItem = list[currentIndexItem + 1];

  if (!nextItem) {
    return null;
  }

  return getNextCategoryData(nextItem);
};

export function getNextEntity({
  currentCategory,
  tabIndex,
  itemIndex,
  list = categoriesInfo,
}) {
  if (typeof itemIndex !== 'undefined' && typeof tabIndex !== 'undefined') {
    const isLastItem = currentCategory.tabs[tabIndex].list.length === itemIndex + 1;
    const isLastTab = currentCategory.tabs.length === tabIndex + 1;

    if (isLastItem && isLastTab) {
      return getNextCategory(currentCategory.key, list);
    }

    if (isLastTab) {
      return getNextItemData({
        ...currentCategory.tabs[tabIndex].list[itemIndex + 1],
        key: currentCategory.key,
      });
    }

    if (isLastItem) {
      return getNextItemData({
        ...currentCategory.tabs[tabIndex + 1].list[0],
        key: currentCategory.key,
      });
    }

    return getNextItemData({
      ...currentCategory.tabs[tabIndex].list[itemIndex + 1],
      key: currentCategory.key,
    });
  }

  if (typeof tabIndex !== 'undefined' && !itemIndex) {
    const isLastTab = currentCategory.tabs.length === tabIndex + 1;

    if (isLastTab) {
      return getNextCategory(currentCategory.key, list);
    }

    return getNextTabData({
      ...currentCategory.tabs[tabIndex + 1],
      key: currentCategory.key,
    });
  }

  return getNextCategory(currentCategory.key, list);
}
