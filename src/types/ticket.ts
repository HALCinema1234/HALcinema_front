export type TTicket = {
    id: number;
    name: string;
    price: number;
    count?: number;
};

export const ticketList: TTicket[] = [
    {
        id: 1,
        name: '一般',
        price: 1800,
    },
    {
        id: 2,
        name: '大学生等',
        price: 1600,
    },
    {
        id: 3,
        name: '中学・高校',
        price: 1400,
    },
    {
        id: 4,
        name: '小学生・幼児',
        price: 1000,
    },
];
