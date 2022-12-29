import howToUseIcon from "assets/images/categories/how-to-use.svg";

import { categoryKeys, categoryTypes } from "./categories";

export const howToUse = {
  icon: howToUseIcon,
  key: categoryKeys.howToUse.key,
  type: categoryTypes.default,
  title: categoryKeys.howToUse.name,
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
  ]
}
