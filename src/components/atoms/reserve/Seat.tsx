import { Button } from '@chakra-ui/react';
import React from 'react';

type Props = {
    state: 'reserved' | 'selected' | 'vacant';
    label: string;
};

export const Seat = ({ state, label }: Props) => {
    return (
        <Button
            colorScheme={state === 'reserved' ? 'blackAlpha' : state === 'selected' ? 'orange' : 'blue'}
            size='sm'
            isDisabled={state === 'reserved' ? true : false}
        >
            {label}
        </Button>
    );
};
