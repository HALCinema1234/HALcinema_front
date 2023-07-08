import { Seat } from '@/components/atoms/reserve/Seat';
import { TSeat } from '@/types/seat';
import { Box, Center, Container, Text } from '@chakra-ui/react';
import React from 'react';

const start = 'A'.charCodeAt(0);
const alphabets = Array.apply(null, new Array(26)).map((v, i) => {
    return String.fromCharCode(start + i);
}, {});

type Props = {
    onClick: () => void;
    seats: TSeat[];
};

export const SeatsContainerS = ({ seats, onClick }: Props) => {
    // 座席の一覧を受け取って、座席の状態を変換する
    const convertSeatToNumber = (seat: TSeat): { id: number; state?: 'vacant' | 'reserved' | 'selected' } => {
        const row = seat.row.charCodeAt(0) - start;
        const col = seat.col - 1;
        return { id: row * 8 + col, state: seat.state };
    };

    const convertSeatsToNumber = (seats: TSeat[]) => {
        return seats.map((seat) => convertSeatToNumber(seat));
    };

    const selectedSeats = convertSeatsToNumber(seats); // シートの状態を数値の配列に変換したもの

    const isSelectedSeatsContainId = (id: number) => {
        return selectedSeats.some((seat) => seat.id === id);
    };

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
                    <Seat
                        key={i}
                        label={`${alphabets[Math.floor(i / 8)]}${i + 1}`}
                        state={isSelectedSeatsContainId(i) ? selectedSeats[i].state! : 'vacant'}
                        onClick={onClick}
                    />
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
