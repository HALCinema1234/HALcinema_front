import { MainContainer } from '@/components/atoms/MainContainer';
import PageTitle from '@/components/atoms/PageTitle';
import { Header } from '@/components/ornagisms/Header';
import { SHead } from '@/components/ornagisms/SHead';
import { TheatreTable } from '@/components/ornagisms/theatreinf/TheatreTable';
import { Card, CardBody } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

export default function Theaterinf() {
    return (
        <>
            <SHead title='映画一覧' />
            <Header />

            <MainContainer>
                <PageTitle title='施設情報' />

                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '4fr 8fr',
                    }}
                >
                    <Card>
                        <CardBody maxH={720}>
                            <Image src='/halimage.png' width={230} height={700} alt='' />
                        </CardBody>
                    </Card>
                    <Card>
                        <CardBody>
                            <TheatreTable />
                        </CardBody>
                    </Card>
                </div>
            </MainContainer>
        </>
    );
}
