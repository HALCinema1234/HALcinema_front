import { Seat } from '@/components/atoms/reserve/Seat';
import { Box, Center, Container, Text } from '@chakra-ui/react';
import React from 'react';

const start = 'A'.charCodeAt(0);
const alphabets = Array.apply(null, new Array(26)).map((v, i) => {
    return String.fromCharCode(start + i);
}, {});

export const SeatsContainerS = () => {
    return (
        <Container
            style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(10, 1fr)',
                gridGap: 5,
                // width: 500,
            }}
        >
            {[...Array(56)].map((_, i) => (
                <>
                    {i % 8 == 0 && (
                        <Text key={alphabets[i / 8]} fontSize={36}>
                            {alphabets[i / 8]}
                        </Text>
                    )}
                    <Seat key={i} label={`${alphabets[Math.floor(i / 8)]}${i + 1}`} state='vacant' />
                    {i % 8 == 7 && (
                        <Text key={alphabets[i / 8]} fontSize={36}>
                            {alphabets[i / 8 - 0.875]}
                        </Text>
                    )}
                </>
            ))}
        </Container>
    );
};
