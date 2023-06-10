import { Button } from '@chakra-ui/react';
import React from 'react';

type Props = {
    state: 'reserved' | 'selected' | 'vacant';
    label: string;
};

export const Seat = ({ state, label }: Props) => {
    return (
        <Button
            colorScheme={state === 'reserved' ? 'red' : state === 'selected' ? 'blue' : 'gray'}
            size='sm'
            isDisabled={state === 'reserved' ? true : false}
        >
            {label}
        </Button>
    );
};
