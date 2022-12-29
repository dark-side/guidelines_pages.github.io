import deliveryIcon from "assets/images/categories/delivery.svg";

import { categoryKeys, categoryTypes } from "./categories";

export const delivery = {
  icon: deliveryIcon,
  key: categoryKeys.delivery.key,
  type: categoryTypes.default,
  title: categoryKeys.delivery.name,
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
