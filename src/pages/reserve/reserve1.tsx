import { MainContainer } from '@/components/atoms/MainContainer';
import { Header } from '@/components/ornagisms/Header';
import { SHead } from '@/components/ornagisms/SHead';
import { Paymenttable } from '@/components/ornagisms/payment/Paymenttable';
import { ReserveStepper } from '@/components/ornagisms/reserve/ReserveStepper';
import React from 'react';

export default function reserve1() {
    return (
        <>
            <SHead title='映画一覧' />
            <Header />

            <MainContainer>
                <h1
                    style={{
                        fontSize: '50px',
                        fontWeight: 'bold',
                    }}
                >
                    チケット料金一覧
                </h1>
                <ReserveStepper />

                <Paymenttable />
            </MainContainer>
        </>
    );
}
