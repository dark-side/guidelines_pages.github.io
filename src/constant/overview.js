import overviewIcon from 'assets/images/categories/overview.svg';

import { categoryKeys, categoryTypes } from './categories';

export const overview = {
  icon: overviewIcon,
  key: categoryKeys.overview.key,
  type: categoryTypes.default,
  title: categoryKeys.overview.name,
  videoTitle: 'videoTitle',
  videoId: 'videoId',
  videoDescription: 'videoDescription',
  links: [
    {
      labelLink: 'labelLink[1]',
      link: 'https://github.com/dark-side/sports-hub',
    }
  ],
};
