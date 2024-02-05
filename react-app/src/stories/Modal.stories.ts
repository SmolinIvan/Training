import { Props } from '../components/Modal/Modal';
import  Modal  from '../components/Modal/Modal';
import type { Meta, StoryObj } from '@storybook/react';

const img = 'https://sun9-44.userapi.com/c858032/v858032250/5bbfb/mht0hZhK0g4.jpg';

const Story: Meta<typeof Modal> = {
    title: 'Modal',
    component: Modal,
    argTypes: {
        imgSrc: {
            control: 'text',
        },
        title: {
            control: 'text',
        },
        text: {
            control: 'text',
        },
    },
};

export const SimpleModal: StoryObj<Props> = {

    args: {
        imgSrc: img,
        title: '3FORCE',
        text: '«3FORCE» – трио из Санкт-Петербурга, совместный проект знаменитого drum-and-bass дуэта Gancher & Ruin и самобытного электронщика EyeScream. Отметившись множеством релизов на ведущих мировых лейблах (Position Chrome, Tainted Audio, Tympanik Audio, Blue Tunes Records), музыканты выпустили ностальгический альбом «Intergalactic», пронизанный атмосферой электронной музыки 80-х.',
        onClose: () => window.location.reload(),
    },
};

export default Story;