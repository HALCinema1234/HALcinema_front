import { MainContainer } from '@/components/atoms/MainContainer';
import { Header } from '@/components/ornagisms/Header';
import { SHead } from '@/components/ornagisms/SHead';
import Image from 'next/image';
import React from 'react';

export default function Theaterinf() {
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
                    施設情報
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: '4fr 8fr',
                        }}
                    >
                        <Image src='/halimage.png' width={300} height={800} alt='' />
                        <div
                            style={{
                                marginLeft: '30px',
                            }}
                        >
                            <p
                                style={{
                                    fontSize: '30px',
                                    // fontWeight: 'bold',
                                }}
                            >
                                住所
                            </p>
                            450-0002 <br />
                            名古屋市中村区名駅4丁目27-1
                            <p
                                style={{
                                    fontSize: '30px',
                                }}
                            >
                                電話番号
                            </p>
                            123-456-7890
                            <p
                                style={{
                                    fontSize: '30px',
                                }}
                            >
                                営業時間
                            </p>
                            10:00~22:00
                            <p
                                style={{
                                    fontSize: '30px',
                                }}
                            >
                                定休日
                            </p>
                            なし
                        </div>
                    </div>
                </h1>
            </MainContainer>
        </>
    );
}
