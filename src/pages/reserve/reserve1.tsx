import { MainContainer } from '@/components/atoms/MainContainer';
import { DetailCard } from '@/components/atoms/reserve/DetailCard';
import { Header } from '@/components/ornagisms/Header';
import { SHead } from '@/components/ornagisms/SHead';
import { Paymenttable } from '@/components/ornagisms/payment/Paymenttable';
import { ReserveContainer } from '@/components/ornagisms/reserve/ReserveContainer';
import { ReserveStepper } from '@/components/ornagisms/reserve/ReserveStepper';
import { SeatsContainerS } from '@/components/ornagisms/reserve/SeatsContainerS';
import { TSeat } from '@/types/seat';
import { Heading, Stack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';

export default function reserve1() {
    const router = useRouter();
    const [seats, setSeat] = React.useState<TSeat[]>([]); // 座席の一覧と状態を管理

    const handleRoute = () => {
        router.push('reserve2');
    };

    // 座席をクリックしたときの処理
    const handleClickSeat = (seat: TSeat) => {
        seats.some((s) => s.row === seat.row && s.col === seat.col)
            ? setSeat((prev) => prev.filter((s) => s.row !== seat.row && s.col !== seat.col)) // 座席を選択したら、座席の一覧から削除
            : setSeat((prev) => [...prev, seat]); // 座席を選択したら、座席の一覧に追加
    };

    return (
        <>
            <SHead title='映画一覧' />
            <Header />
            <MainContainer>
                <ReserveStepper index={0} />
                <ReserveContainer onClick={handleRoute}>
                    <SeatsContainerS onClick={(seat) => handleClickSeat(seat)} seats={seats} />
                </ReserveContainer>
            </MainContainer>
        </>
    );
}
