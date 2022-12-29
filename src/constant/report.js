import reportIcon from "assets/images/categories/report.svg";

import { categoryKeys, categoryTypes } from "./categories";

export const report = {
  icon: reportIcon,
  key: categoryKeys.report.key,
  type: categoryTypes.default,
  title: categoryKeys.report.name,
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
