import styled from '@emotion/styled';
import Link from 'next/link';
import React from 'react';

type Props = {
    name: string;
    href: string;
};

export const HeaderNav = ({ name, href }: Props) => {
    return (
        <Link href={href}>
            <SNavButton>{name}</SNavButton>
        </Link>
    );
};

const SNavButton = styled.button`
    display: block;
    /* width: 40px; */
    height: 40px;
    margin: 0 auto;
    font-weight: bold;
    padding: 0 15px;
    border-radius: 5px;
    font-size: 18px;
    background-size: 24px 24px;
    cursor: pointer;

    :hover {
        background-color: #298581;
        transition: 0.4s;
    }
`;
