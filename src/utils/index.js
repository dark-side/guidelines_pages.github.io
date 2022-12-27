export const getNextItemLevel = (list, currentItem) => {
  const currentIndexItem = list.findIndex((item) => item.key === currentItem.key);
  const nextItem = list[currentIndexItem + 1];

  if (!nextItem) {
    return;
  }

  return nextItem;
};
