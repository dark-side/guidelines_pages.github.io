import { categoryKeys, categoryTypes } from "./categories";

export const dataCat = {
  key: categoryKeys.data.key,
  type: categoryTypes.tab,
  title: categoryKeys.data.name,
  tabs: [
    {
      tabTitle: 'tabTitle[1]',
      videoId: 'videoId[1]',
      videoDescription: 'videoDescription[1]',
      links: [
        {
          labelLink: 'tabTitle[1]labelLink[1]',
          link: 'https://www.softserveinc.com/en-us',
        },
        {
          labelLink: 'tabTitle[1]labelLink[2]',
          link: 'https://www.softserveinc.com/en-us',
        },
      ]
    },
    {
      tabTitle: 'tabTitle[2]',
      videoId: 'videoId[2]',
      videoDescription: 'videoDescription[2]',
      links: [
        {
          labelLink: 'tabTitle[2]labelLink[1]',
          link: 'https://www.softserveinc.com/en-us',
        }
      ]
    },
    {
      tabTitle: 'tabTitle[3]',
      videoId: 'videoId[3]',
      videoDescription: 'videoDescription[3]',
      links: [
        {
          labelLink: 'tabTitle[3]labelLink[1]',
          link: 'https://www.softserveinc.com/en-us',
        }
      ]
    },
  ],
}
