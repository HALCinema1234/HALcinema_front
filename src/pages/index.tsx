import { Inter } from '@next/font/google';
import { SHead } from '@/components/ornagisms/SHead';
import { Header } from '@/components/ornagisms/Header';
import { MainContainer } from '@/components/atoms/MainContainer';
import styled from '@emotion/styled';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    return (
        <>
            <SHead title='映画一覧' />
            <Header />

            <MainContainer>
                <S>
                    <SCard>aaaaa</SCard>
                    <SCard>aaaaa</SCard>
                    <SCard>aaaaa</SCard>
                </S>
            </MainContainer>
        </>
    );
}

const S = styled.div`
    display: 'grid';
    grid-template-columns: '1fr 1fr 1fr';
`;

const SCard = styled.div`
    width: 100;
    height: 100;
    border: 1px solid #999;
    border-radius: 10px;
`;
