import { atom } from 'recoil';

export const userState = atom({
    key: 'userState',
    default: {
        name: 'John Doe',
        age: 30,
    },
});

export const reserveState = atom({
    key: 'reserveState',
    default: {
        name: 'John Doe',
        age: 30,
    },
});
