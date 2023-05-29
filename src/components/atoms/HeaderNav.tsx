import styled from '@emotion/styled';
import React from 'react';

type Props = {
    name: string;
    href: string;
};

export const HeaderNav = ({ name, href }: Props) => {
    return <SNavButton>{name}</SNavButton>;
};

const SNavButton = styled.button`
    display: block;
    width: 40px;
    height: 40px;
    margin: 0 auto;

    background-size: 24px 24px;
    cursor: pointer;
`;
