import styled from '@emotion/styled';
import React from 'react';

export const HeaderNav = () => {
    return <SNavButton></SNavButton>;
};

const SNavButton = styled.a`
    display: block;
    width: 40px;
    height: 40px;
    margin: 0 auto;

    background-size: 24px 24px;
    cursor: pointer;
`;
