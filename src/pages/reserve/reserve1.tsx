import { MainContainer } from '@/components/atoms/MainContainer';
import { Header } from '@/components/ornagisms/Header';
import { SHead } from '@/components/ornagisms/SHead';
import { ReserveContainer } from '@/components/ornagisms/reserve/ReserveContainer';
import { ReserveStepper } from '@/components/ornagisms/reserve/ReserveStepper';
import { SeatsContainerS } from '@/components/ornagisms/reserve/SeatsContainerS';
import { reserveState } from '@/recoil/states';
import { TSeat } from '@/types/seat';
import { useRouter } from 'next/router';
import React from 'react';
import { useRecoilState } from 'recoil';

export default function reserve1() {
    const router = useRouter();
    const [seats, setSeat] = React.useState<TSeat[]>([]); // 座席の一覧と状態を管理

    const [reserveInfo, setReserveInfo] = useRecoilState(reserveState);

    const handleRoute = () => {
        router.push('reserve2');
    };

    // 座席をクリックしたときの処理
    const handleClickSeat = (seat: TSeat) => {
        reserveInfo.seats.some((s) => s.row === seat.row && s.col === seat.col)
            ? setReserveInfo({
                  ...reserveInfo,
                  seats: reserveInfo.seats.filter((s) => s.row !== seat.row || s.col !== seat.col),
              })
            : setReserveInfo({
                  ...reserveInfo,
                  seats: [...reserveInfo.seats, seat],
              });
    };

    return (
        <>
            <SHead title='映画一覧' />
            <Header />
            <MainContainer>
                <ReserveStepper index={0} />
                <ReserveContainer onClick={handleRoute}>
                    <SeatsContainerS onClick={(seat) => handleClickSeat(seat)} seats={reserveInfo.seats} />
                </ReserveContainer>
            </MainContainer>
        </>
    );
}
