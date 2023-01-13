import contributeIcon from 'assets/images/categories/contribute.svg';

import { categoryKeys, categoryTypes } from './categories';

export const contribute = {
  icon: contributeIcon,
  key: categoryKeys.contribute.key,
  type: categoryTypes.default,
  title: categoryKeys.contribute.name,
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
