import { Seat } from '@/components/atoms/reserve/Seat';
import { Box } from '@chakra-ui/react';
import React from 'react';

export const SeatsContainerS = () => {
    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(8, 1fr)',
                gridGap: '10px',
                width: 800,
            }}
        >
            {[...Array(56)].map((_, i) => (
                <Seat label={`A${i + 1}`} state='vacant' />
            ))}
        </div>
    );
};
