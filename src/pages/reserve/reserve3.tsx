import { MainContainer } from '@/components/atoms/MainContainer';
import { DetailCard } from '@/components/atoms/reserve/DetailCard';
import { Header } from '@/components/ornagisms/Header';
import { SHead } from '@/components/ornagisms/SHead';
import { Paymenttable } from '@/components/ornagisms/payment/Paymenttable';
import { ReserveStepper } from '@/components/ornagisms/reserve/ReserveStepper';
import { reserveState } from '@/recoil/states';
import { useRouter } from 'next/router';
import React from 'react';
import { useRecoilState } from 'recoil';

export default function reserve3() {
    const router = useRouter();
    const handleRoute = () => {
        router.push('reserve4');
    };

    const [reserveInfo, setReserveInfo] = useRecoilState(reserveState);

    const payment =
        reserveInfo.tickets.length === 0
            ? 0
            : reserveInfo.tickets.reduce((acc, cur) => {
                  return acc + cur.price * cur.count!;
              }, 0);

const handlePutReserveData = () => {
        



    return (
        <>
            <SHead title='映画一覧' />
            <Header />
            <MainContainer>
                <ReserveStepper index={2} />
                <DetailCard onClick={handleRoute} />
            </MainContainer>
        </>
    );
}
