import { Inter } from '@next/font/google';
import { SHead } from '@/components/ornagisms/SHead';
import { Header } from '@/components/ornagisms/Header';
import { MainContainer } from '@/components/atoms/MainContainer';
import styled from '@emotion/styled';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    return (
        <>
            <SHead title='映画一覧' />
            <Header />

            <MainContainer>
                <S>
                    <SCard>
                        <Image
                            src='/dummy/Interstellar-HD_1920x1200.jpg'
                            alt=''
                            width={500}
                            height={800}
                            style={{
                                borderRadius: '10px 10px 0 0',
                            }}
                        />
                        <p
                            style={{
                                fontSize: '30px',
                                fontWeight: 'bold',
                                textAlign: 'center',
                            }}
                        >
                            映画タイトル
                        </p>
                    </SCard>
                    <SCard>
                        <Image
                            src='/dummy/Interstellar-HD_1920x1200.jpg'
                            alt=''
                            width={500}
                            height={800}
                            style={{
                                borderRadius: '10px 10px 0 0',
                            }}
                        />
                        <p
                            style={{
                                fontSize: '30px',
                                fontWeight: 'bold',
                                textAlign: 'center',
                            }}
                        >
                            映画タイトル
                        </p>
                    </SCard>
                    <SCard>
                        <Image
                            src='/dummy/Interstellar-HD_1920x1200.jpg'
                            alt=''
                            width={500}
                            height={800}
                            style={{
                                borderRadius: '10px 10px 0 0',
                            }}
                        />
                        <p
                            style={{
                                fontSize: '30px',
                                fontWeight: 'bold',
                                textAlign: 'center',
                            }}
                        >
                            映画タイトル
                        </p>
                    </SCard>
                </S>
            </MainContainer>
        </>
    );
}

const S = styled.div`
    display: grid;
    margin-top: 100px;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
`;

const SCard = styled.div`
    width: 100;
    height: 100;
    border: 1px solid #999;
    border-radius: 10px;
`;
