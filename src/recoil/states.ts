import { TManage, TMovie } from '@/types/movie';
import { TSeat } from '@/types/seat';
import { TTicket } from '@/types/ticket';
import { atom } from 'recoil';

type TypeUserState = {
    id: number | null;
    name?: string;
    nameKana?: string;
    password?: string;
    birthday?: string;
    gender?: number;
    phone?: number;
    mailAddress?: string;
};

export const userState = atom<TypeUserState>({
    key: 'userState',
    default: {
        id: null,
    },
});

type TypeReserveState = {
    movie: TMovie | null;
    movieManage: TManage | null;
    seats: TSeat[];
    tickets: TTicket[];
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
