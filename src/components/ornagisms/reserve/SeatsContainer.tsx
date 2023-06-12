import { Seat } from '@/components/atoms/reserve/Seat';
import { Box } from '@chakra-ui/react';
import React from 'react';

export const SeatsContainer = () => {
    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr 1fr',
                gridGap: '10px',
                width: 300,
            }}
        >
            {[...Array(40)].map((_, i) => (
                <Seat label={`A${i + 1}`} state='vacant' />
            ))}
        </div>
    );
};
