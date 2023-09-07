import { TManage, TMovie } from '@/types/movie';
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
};

export const reserveState = atom<TypeReserveState>({
    key: 'reserveState',
    default: {
        movie: null,
        movieManage: null,
    },
});
