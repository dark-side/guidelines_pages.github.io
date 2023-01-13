import projectIcon from 'assets/images/categories/project.svg';

import { categoryKeys, categoryTypes } from './categories';

export const project = {
  icon: projectIcon,
  key: categoryKeys.project.key,
  type: categoryTypes.default,
  title: categoryKeys.project.name,
  videoTitle: 'videoTitle',
  videoId: 'videoId',
  videoDescription: 'videoDescription',
  links: [
    {
      labelLink: 'labelLink[1]',
      link: 'https://www.softserveinc.com/en-us',
    },
    {
      labelLink: 'labelLink[2]',
      link: 'https://www.softserveinc.com/en-us',
    }
  ],
};
