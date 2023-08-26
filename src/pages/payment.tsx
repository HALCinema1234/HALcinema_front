import { MainContainer } from '@/components/atoms/MainContainer';
import { Header } from '@/components/ornagisms/Header';
import { SHead } from '@/components/ornagisms/SHead';
import { Paymenttable } from '@/components/ornagisms/payment/Paymenttable';
import { Flex } from '@chakra-ui/react';
import React from 'react';

export default function Payment() {
    return (
        <>
            <SHead title='映画一覧' />
            <Header />

            <MainContainer>
                <h1
                    style={{
                        fontSize: '50px',
                        fontWeight: 'bold',
                        textAlign: 'center',
                    }}
                >
                    チケット料金一覧
                </h1>
                <Flex direction='column' alignItems='center'>
                    <Paymenttable />
                </Flex>
            </MainContainer>
        </>
    );
}
