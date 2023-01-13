import thanksIcon from 'assets/images/categories/thanks.svg';

import { categoryKeys, categoryTypes } from './categories';

export const thanks = {
  icon: thanksIcon,
  key: categoryKeys.thanks.key,
  type: categoryTypes.default,
  title: categoryKeys.thanks.name,
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
