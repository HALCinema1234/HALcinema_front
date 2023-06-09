import { Seat } from '@/components/atoms/reserve/Seat';
import { TSeat } from '@/types/seat';
import { Box, Center, Container, Text } from '@chakra-ui/react';
import React from 'react';

// 座席の一覧を受け取って、座席の状態を変換する
const start = 'A'.charCodeAt(0);
const alphabets = Array.apply(null, new Array(26)).map((v, i) => {
    return String.fromCharCode(start + i);
}, {});

type Props = {
    onClick: (seat: TSeat) => void;
    seats: TSeat[];
};

export const SeatsContainerS = ({ seats, onClick }: Props) => {
    // 座席の一覧を受け取って、座席の状態を変換する
    const convertSeatToNumber = (seat: TSeat): { id: number; state?: 'vacant' | 'reserved' | 'selected' } => {
        const row = seat.row.charCodeAt(0) - start;
        const col = seat.col - 1;
        return { id: row * 8 + col, state: seat.state };
    };

    // 座席の一覧を受け取って、座席の状態を変換する
    const convertSeatsToNumber = (seats: TSeat[]) => {
        return seats.map((seat) => convertSeatToNumber(seat));
    };

    const selectedSeats = convertSeatsToNumber(seats); // シートの状態を数値の配列に変換したもの

    // 座席の一覧から、指定したidの座席が選択されているかどうかを判定する
    const isSelectedSeatsContainId = (id: number): boolean => {
        return selectedSeats.some((seat) => seat.id === id);
    };

    // 座席の一覧から、指定したidの座席を取得する
    const convertIdToSeat = (id: number): TSeat => {
        const row = Math.floor(id / 8);
        const col = (id % 8) + 1;
        return { row: alphabets[row], col: col, state: 'selected' };
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
                        label={`${alphabets[Math.floor(i / 8)]}${(i + 1) % 8 == 0 ? 8 : (i + 1) % 8}`}
                        state={
                            isSelectedSeatsContainId(i) ? selectedSeats.find((seat) => seat.id == i)?.state! : 'vacant'
                        }
                        onClick={() => onClick(convertIdToSeat(i))}
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
