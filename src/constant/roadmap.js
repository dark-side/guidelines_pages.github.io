import roadmapIcon from 'assets/images/categories/roadmap.svg';

import { categoryKeys, categoryTypes } from './categories';

export const roadmap = {
  icon: roadmapIcon,
  key: categoryKeys.roadmap.key,
  type: categoryTypes.default,
  title: categoryKeys.roadmap.name,
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
