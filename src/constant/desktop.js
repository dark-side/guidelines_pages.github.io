import desktopIcon from "assets/images/categories/desktop.svg";

import { categoryKeys, categoryTypes } from "./categories";

export const desktop = {
  icon: desktopIcon,
  key: categoryKeys.desktop.key,
  type: categoryTypes.tabAccordion,
  title: categoryKeys.desktop.name,
  tabs: [
    {
      tabTitle: 'tabTitle[1]',
      list: [
        {
          itemTitle: 'tabTitle[1]list[1]itemTitle[1]',
          videoTitle: 'tabTitle[1]list[1]videoTitle[1]',
          videoId: 'tabTitle[1]list[1]videoId[1]',
          videoDescription: 'tabTitle[1]list[1]videoDescription[1]',
          links: [
            {
              labelLink: 'tabTitle[1]list[1]labelLink[1]',
              link: 'https://www.softserveinc.com/en-us',
            },
            {
              labelLink: 'tabTitle[1]list[1]labelLink[2]',
              link: 'https://www.softserveinc.com/en-us',
            },
          ]
        },
        {
          itemTitle: 'tabTitle[1]list[2]itemTitle[1]',
          videoTitle: 'tabTitle[1]list[2]videoTitle[1]',
          videoId: 'tabTitle[1]list[2]videoId[1]',
          videoDescription: 'tabTitle[1]list[2]videoDescription[1]',
          links: [
            {
              labelLink: 'tabTitle[1]list[2]labelLink[1]',
              link: 'https://www.softserveinc.com/en-us',
            },
            {
              labelLink: 'tabTitle[1]list[2]labelLink[2]',
              link: 'https://www.softserveinc.com/en-us',
            },
          ]
        },
        {
          itemTitle: 'tabTitle[1]list[3]itemTitle[1]',
          videoTitle: 'tabTitle[1]list[3]videoTitle[1]',
          videoId: 'tabTitle[1]list[3]videoId[1]',
          videoDescription: 'tabTitle[1]list[3]videoDescription[1]',
          links: [
            {
              labelLink: 'tabTitle[1]list[3]labelLink[1]',
              link: 'https://www.softserveinc.com/en-us',
            },
            {
              labelLink: 'tabTitle[1]list[3]labelLink[2]',
              link: 'https://www.softserveinc.com/en-us',
            },
          ]
        }
      ]
    },
    {
      tabTitle: 'tabTitle[2]',
      list: [
        {
          itemTitle: 'tabTitle[2]list[1]itemTitle[1]',
          videoTitle: 'tabTitle[2]list[1]videoTitle[1]',
          videoId: 'tabTitle[2]list[1]videoId[1]',
          videoDescription: 'tabTitle[2]list[1]videoDescription[1]',
          links: [
            {
              labelLink: 'tabTitle[2]list[1]labelLink[1]',
              link: 'https://www.softserveinc.com/en-us',
            },
            {
              labelLink: 'tabTitle[2]list[1]labelLink[2]',
              link: 'https://www.softserveinc.com/en-us',
            },
          ]
        },
      ]
    },
  ],
}
