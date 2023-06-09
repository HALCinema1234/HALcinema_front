import { MainContainer } from '@/components/atoms/MainContainer';
import { Header } from '@/components/ornagisms/Header';
import { SHead } from '@/components/ornagisms/SHead';
import { Paymenttable } from '@/components/ornagisms/payment/Paymenttable';
import { ReserveStepper } from '@/components/ornagisms/reserve/ReserveStepper';
import React from 'react';

export default function reserve4() {
    return (
        <>
            <SHead title='映画一覧' />
            <Header />
            <MainContainer>
                <ReserveStepper index={3} />
            </MainContainer>
        </>
    );
}
