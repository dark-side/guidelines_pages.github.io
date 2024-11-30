import architectureIcon from 'assets/images/categories/architecture.svg';

import { categoryKeys, categoryTypes } from './categories';

export const architecture = {
  icon: architectureIcon,
  key: categoryKeys.architecture.key,
  type: categoryTypes.default,
  title: categoryKeys.architecture.name,
  videoTitle: 'videoTitle',
  videoId: 'videoId',
  videoDescription: 'videoDescription',
  links: [
    {
      labelLink: 'labelLink[1]',
      link: 'https://github.com/dark-side/sports-hub?tab=readme-ov-file#architecture-vision',
    },
    {
      labelLink: 'labelLink[2]',
      link: 'https://github.com/dark-side/sports-hub',
    }
  ],
};
