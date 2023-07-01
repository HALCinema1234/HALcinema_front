import { MainContainer } from '@/components/atoms/MainContainer';
import { DetailCard } from '@/components/atoms/reserve/DetailCard';
import { Header } from '@/components/ornagisms/Header';
import { SHead } from '@/components/ornagisms/SHead';
import { Paymenttable } from '@/components/ornagisms/payment/Paymenttable';
import { ReserveContainer } from '@/components/ornagisms/reserve/ReserveContainer';
import { ReserveStepper } from '@/components/ornagisms/reserve/ReserveStepper';
import { SeatsContainerS } from '@/components/ornagisms/reserve/SeatsContainerS';
import { Heading, Stack } from '@chakra-ui/react';
import React from 'react';

export default function reserve1() {
    return (
        <>
            <SHead title='映画一覧' />
            <Header />
            <MainContainer>
                <ReserveStepper index={0} />
                <ReserveContainer>
                    <SeatsContainerS />
                </ReserveContainer>
            </MainContainer>
        </>
    );
}
