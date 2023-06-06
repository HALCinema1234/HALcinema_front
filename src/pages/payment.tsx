import { MainContainer } from '@/components/atoms/MainContainer';
import { Header } from '@/components/ornagisms/Header';
import { SHead } from '@/components/ornagisms/SHead';
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
                    }}
                >
                    チケット料金一覧
                </h1>

                <dl>
                    <dt
                        style={{
                            marginTop: 100,
                        }}
                    >
                        一般
                    </dt>
                    <dd
                        style={{
                            fontSize: '30px',
                            fontWeight: 'bold',
                            marginLeft: '30px',
                        }}
                    >
                        1800円
                    </dd>
                    <dt
                        style={{
                            marginTop: 10,
                        }}
                    >
                        大学生
                    </dt>
                    <dd
                        style={{
                            fontSize: '30px',
                            fontWeight: 'bold',
                            marginLeft: '30px',
                        }}
                    >
                        1800円
                    </dd>
                    <dt
                        style={{
                            marginTop: 10,
                        }}
                    >
                        中学・高校生
                    </dt>
                    <dd
                        style={{
                            fontSize: '30px',
                            fontWeight: 'bold',
                            marginLeft: '30px',
                        }}
                    >
                        1800円
                    </dd>
                    <dt
                        style={{
                            marginTop: 10,
                        }}
                    >
                        一般
                    </dt>
                    <dd
                        style={{
                            fontSize: '30px',
                            fontWeight: 'bold',
                            marginLeft: '30px',
                        }}
                    >
                        1800円
                    </dd>
                </dl>
            </MainContainer>
        </>
    );
}
