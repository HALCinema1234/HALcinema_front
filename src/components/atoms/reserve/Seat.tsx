import { Button } from '@chakra-ui/react';
import React from 'react';

type Props = {
    state: 'reserved' | 'selected' | 'vacant';
    label: string;
    onClick: () => void;
};

export const Seat = ({ state, label, onClick }: Props) => {
    return (
        <Button
            colorScheme={state === 'reserved' ? 'blackAlpha' : state === 'selected' ? 'orange' : 'blue'}
            size='sm'
            isDisabled={state === 'reserved' ? true : false}
            style={{ width: '50px', height: '50px' }}
            onClick={onClick}
        >
            {label}
        </Button>
    );
};
