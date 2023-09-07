import { TManage, TMovie } from '@/types/movie';
import { TSeat } from '@/types/seat';
import { atom } from 'recoil';

export const userState = atom({
    key: 'userState',
    default: {
        name: 'John Doe',
        age: 30,
    },
});

type TypeReserveState = {
    movie: TMovie | null;
    movieManage: TManage | null;
    seats: TSeat[];
    tickets: string[];
    payment: number;
};

export const reserveState = atom<TypeReserveState>({
    key: 'reserveState',
    default: {
        movie: null,
        movieManage: null,
        seats: [],
        tickets: [],
        payment: 0,
    },
});
