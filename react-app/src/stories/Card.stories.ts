import { CardProps } from '../components/Card/Card';
import { Props } from '../components/Modal/Modal';
import  Card  from '../components/Card/Card';
import  Modal  from '../components/Modal/Modal';
import type { Meta, StoryObj } from '@storybook/react';

const img = 'https://sun9-44.userapi.com/c858032/v858032250/5bbfb/mht0hZhK0g4.jpg';

const ModalProps: Props = {
    title: '3Force',
    text: '3Force',
}

const Story: Meta<typeof Card> = {
    title: 'Card',
    component: Card,
    argTypes: {
        imgSrc: {
            control: 'text',
        },
    },
};

export const SimpleCard: StoryObj<CardProps> = {

    args: {
        imgSrc: img,
        onClick: () => { return Modal(ModalProps)},
    },
};

export default Story;