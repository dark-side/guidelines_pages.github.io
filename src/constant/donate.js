import donateIcon from 'assets/images/categories/donate.svg';

import { categoryKeys, categoryTypes } from './categories';

export const donate = {
  icon: donateIcon,
  key: categoryKeys.donate.key,
  type: categoryTypes.default,
  title: categoryKeys.donate.name,
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
