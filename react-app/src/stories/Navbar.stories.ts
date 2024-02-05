import { InOneNavBarMenuProps } from '../components/Navbar/Navbar';
import  Navbar  from '../components/Navbar/Navbar';
import type { Meta, StoryObj } from '@storybook/react';
import '../components/Dropdown/Dropdown.css';

const Story: Meta<typeof Navbar> = {
    title: 'Navbar',
    component: Navbar,
    argTypes: {
        list: {
            control: Array,
        },
    },
};

export const SimpleNavbar: StoryObj<InOneNavBarMenuProps> = {

    args: {
        list: [
            {
                title: 'Первая кнопка',
                url: '/',
                verticalMenu:  [
                  {
                    title: 'Кнопка пониже первой',
                    url: '/',
                  },
                  {
                    title: 'Еще ниже',
                    url: '/2',
                  },
                  {
                    title: 'Последняя под первой',
                    url: '/2',
                  },
                ],
              },
              {
                title: 'Вторая кнопка',
                url: '/',
                verticalMenu:  [
                  {
                    title: 'Кнопка под второй',
                    url: '/',
                  },
                  {
                    title: 'Вторая кнопка под второй',
                    url: '/2',
                  },
                ],
              },
              {
                title: 'Третья кнопка',
                url: '/',
                verticalMenu:  [
                  {
                    title: ':D',
                    url: '/',
                  },
                ],
              },
        ],
    },
};

export default Story;