import { MainContainer } from '@/components/atoms/MainContainer';
import { Header } from '@/components/ornagisms/Header';
import { SHead } from '@/components/ornagisms/SHead';
import { ReserveContainer } from '@/components/ornagisms/reserve/ReserveContainer';
import { ReserveStepper } from '@/components/ornagisms/reserve/ReserveStepper';
import { SeatsContainerS } from '@/components/ornagisms/reserve/SeatsContainerS';
import { reserveState } from '@/recoil/states';
import { TSeat } from '@/types/seat';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';

export default function reserve1() {
    const router = useRouter();

    const [reserveInfo, setReserveInfo] = useRecoilState(reserveState);

    const handleRoute = () => {
        router.push('reserve2');
    };

    // 座席をクリックしたときの処理
    const handleClickSeat = (seat: TSeat) => {
        reserveInfo.seats.some((s) => s.row === seat.row && s.col === seat.col)
            ? setReserveInfo({
                  ...reserveInfo,
                  seats: reserveInfo.seats.filter((s) => s.row !== seat.row || s.col !== seat.col),
              })
            : setReserveInfo({
                  ...reserveInfo,
                  seats: [...reserveInfo.seats, seat],
              });
    };

    // 予約済の座席を取得
    const fetchSeats = async () => {
        // const res = await axios(process.env.NEXT_PUBLIC_API_BASE_URL + 'v1/seats' + reserveInfo.movieManage?.id);

        const data: any = await axios.get(
            process.env.NEXT_PUBLIC_API_BASE_URL + 'v1/seats/' + reserveInfo.movieManage?.id,
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            },
        );
        console.log(data);

        setReserveInfo({
            ...reserveInfo,
            // @ts-ignore
            seats: data.data[1].map((seat) => ({
                ...seat,
                state: 'reserved',
            })),
        });
    };

    useEffect(() => {
        (async () => {
            await fetchSeats();
        })();
    }, []);

    return (
        <>
            <SHead title='映画一覧' />
            <Header />
            <MainContainer>
                <ReserveStepper index={0} />
                <ReserveContainer onClick={handleRoute}>
                    <SeatsContainerS onClick={(seat) => handleClickSeat(seat)} seats={reserveInfo.seats} />
                </ReserveContainer>
            </MainContainer>
        </>
    );
}
