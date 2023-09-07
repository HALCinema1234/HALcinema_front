import { MainContainer } from '@/components/atoms/MainContainer';
import { DetailCard } from '@/components/atoms/reserve/DetailCard';
import { Header } from '@/components/ornagisms/Header';
import { SHead } from '@/components/ornagisms/SHead';
import { Paymenttable } from '@/components/ornagisms/payment/Paymenttable';
import { ReserveStepper } from '@/components/ornagisms/reserve/ReserveStepper';
import { useRouter } from 'next/router';
import React from 'react';

export default function reserve3() {
    const router = useRouter();
    const handleRoute = () => {
        router.push('reserve4');
    };
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
