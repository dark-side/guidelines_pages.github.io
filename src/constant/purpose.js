import purposeIcon from 'assets/images/categories/purpose.svg';

import { categoryKeys, categoryTypes } from './categories';

export const purpose = {
  icon: purposeIcon,
  key: categoryKeys.purpose.key,
  type: categoryTypes.default,
  title: categoryKeys.purpose.name,
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
