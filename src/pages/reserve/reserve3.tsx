import { MainContainer } from '@/components/atoms/MainContainer';
import { DetailCard } from '@/components/atoms/reserve/DetailCard';
import { Header } from '@/components/ornagisms/Header';
import { SHead } from '@/components/ornagisms/SHead';
import { Paymenttable } from '@/components/ornagisms/payment/Paymenttable';
import { ReserveStepper } from '@/components/ornagisms/reserve/ReserveStepper';
import { reserveState } from '@/recoil/states';
import { TSeat } from '@/types/seat';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';

export default function reserve3() {
    const router = useRouter();
    const handleRoute = () => {
        router.push('reserve4');
    };

    const [reserveInfo, setReserveInfo] = useRecoilState(reserveState);

    const payment =
        reserveInfo.tickets.length === 0
            ? 0
            : reserveInfo.tickets.reduce((acc, cur) => {
                  return acc + cur.price * cur.count!;
              }, 0);

    const formatSeatToName = (seat: TSeat) => {
        const num = ('00' + seat.col).slice(-2);
        return `${seat.row}${num}`;
    };

    const handlePutReserveData = async () => {
        try {
            await axios.post(
                process.env.NEXT_PUBLIC_API_BASE_URL! + 'v1/reserves',
                {
                    manage_id: reserveInfo.movieManage?.id,
                    member_id: 1,
                    seat: reserveInfo.seats.map((seat, i) => {
                        return {
                            name: formatSeatToName(seat),
                            ticket: reserveInfo.tickets[i].id,
                        };
                    }),
                },
                {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                },
            );
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        (async () => {
            await handlePutReserveData();
        })();
    }, []);

    return (
        <>
            <SHead title='映画一覧' />
            <Header />
            <MainContainer>
                <ReserveStepper index={2} />
                <DetailCard onClick={handleRoute} />
            </MainContainer>
        </>
    );
}
