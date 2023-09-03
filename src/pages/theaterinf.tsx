import { MainContainer } from '@/components/atoms/MainContainer';
import PageTitle from '@/components/atoms/PageTitle';
import { Header } from '@/components/ornagisms/Header';
import { SHead } from '@/components/ornagisms/SHead';
import { TheatreTable } from '@/components/ornagisms/theatreinf/TheatreTable';
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
                    <Image src='/halimage.png' width={300} height={800} alt='' />
                    <TheatreTable />
                </div>
            </MainContainer>
        </>
    );
}
