import { MainContainer } from '@/components/atoms/MainContainer';
import { Header } from '@/components/ornagisms/Header';
import { SHead } from '@/components/ornagisms/SHead';
import { Paymenttable } from '@/components/ornagisms/payment/Paymenttable';
import { ReserveStepper } from '@/components/ornagisms/reserve/ReserveStepper';
import { Button, Flex } from '@chakra-ui/react';
import React from 'react';

export default function reserve2() {
    return (
        <>
            <SHead title='映画一覧' />
            <Header />
            <MainContainer>
                <ReserveStepper index={1} />
                <Flex direction='column' alignItems='center'>
                    <Button colorScheme='cyan' padding={7} width={500} marginBottom={5}>
                        クレジットカード
                    </Button>
                    <Button colorScheme='cyan' padding={7} width={500}>
                        PayPay
                    </Button>
                </Flex>
            </MainContainer>
        </>
    );
}
