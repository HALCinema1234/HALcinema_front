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
                <Image
                    src={'/dummy/Interstellar-HD_1920x1200.jpg'}
                    width={1200}
                    height={600}
                    alt=''
                    style={{
                        width: '100%',
                    }}
                />
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
                <div
                    style={{
                        boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
                        borderRadius: '10px',
                        padding: '20px',
                        marginTop: '100px',
                    }}
                >
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: '10fr 2fr',
                        }}
                    >
                        <h1
                            style={{
                                fontSize: '50px',
                                fontWeight: 'bold',
                            }}
                        >
                            おすすめ映画
                        </h1>
                        <div>
                            一覧へ
                            <button
                                style={{
                                    backgroundColor: '#0fbdff',
                                    width: '50px',
                                    height: '50px',
                                    border: 'none',
                                    color: 'white',
                                    fontSize: '30px',
                                    fontWeight: 'bold',
                                    marginLeft: '10px',
                                }}
                            >{`>`}</button>
                        </div>
                    </div>

                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(3, 1fr)',
                            gridGap: '20px',
                        }}
                    >
                        <Image
                            src='/dummy/Interstellar-HD_1920x1200.jpg'
                            alt=''
                            width={500}
                            height={800}
                            style={{
                                borderRadius: '10px 10px 0 0',
                            }}
                        />
                        <Image
                            src='/dummy/Interstellar-HD_1920x1200.jpg'
                            alt=''
                            width={500}
                            height={800}
                            style={{
                                borderRadius: '10px 10px 0 0',
                            }}
                        />
                        <Image
                            src='/dummy/Interstellar-HD_1920x1200.jpg'
                            alt=''
                            width={500}
                            height={800}
                            style={{
                                borderRadius: '10px',
                            }}
                        />
                    </div>

                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: '10fr 2fr',
                            marginTop: '100px',
                        }}
                    >
                        <h1
                            style={{
                                fontSize: '50px',
                                fontWeight: 'bold',
                            }}
                        >
                            公開予定映画
                        </h1>
                        <div>
                            一覧へ
                            <button
                                style={{
                                    backgroundColor: '#0fbdff',
                                    width: '50px',
                                    height: '50px',
                                    border: 'none',
                                    color: 'white',
                                    fontSize: '30px',
                                    fontWeight: 'bold',
                                    marginLeft: '10px',
                                }}
                            >{`>`}</button>
                        </div>
                    </div>

                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(3, 1fr)',
                            gridGap: '20px',
                        }}
                    >
                        <Image
                            src='/dummy/Interstellar-HD_1920x1200.jpg'
                            alt=''
                            width={500}
                            height={800}
                            style={{
                                borderRadius: '10px 10px 0 0',
                            }}
                        />
                        <Image
                            src='/dummy/Interstellar-HD_1920x1200.jpg'
                            alt=''
                            width={500}
                            height={800}
                            style={{
                                borderRadius: '10px 10px 0 0',
                            }}
                        />
                        <Image
                            src='/dummy/Interstellar-HD_1920x1200.jpg'
                            alt=''
                            width={500}
                            height={800}
                            style={{
                                borderRadius: '10px',
                            }}
                        />
                    </div>
                </div>
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
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 1);
`;
