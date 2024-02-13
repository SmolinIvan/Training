
import { InOneNavBarMenuProps } from "./Navbar";

export const menuNavbar: InOneNavBarMenuProps['list']= [


  {
    title: '1',
    url: '/',
    verticalMenu:  [
      {
        title: 'Общее',
        url: '/',
      },
      {
        title: 'Важное',
        url: '/2',
      },
      {
        title: 'Самое важное',
        url: '/2',
      },
    ],
  },
  {
    title: '2',
    url: '/2',
    verticalMenu: [
      {
        title: 'Прочее',
        url: '/',
      },
      {
        title: 'О нас',
        url: '/2',
      },
    ],
  },
  {
    title: '3',
    url: '/3',
    verticalMenu:   [
      {
        title: 'Гостям',
        url: '/',
      },
      {
        title: 'Где',
        url: '/2',
      },
    ],
  },
  {
    title: 'Еще',
    url: '/more',
    verticalMenu:   [
      {
        title: 'Привет',
        url: '/',
      },
      {
        title: 'Бомжур',
        url: '/2',
      },
    ],
  },
]