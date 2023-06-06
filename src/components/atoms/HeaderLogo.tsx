import Image from 'next/image';
import React from 'react';

export const HeaderLogo = () => {
    return (
        <div>
            <Image src='/hclogo.png' width={200} height={50} alt='' />
        </div>
    );
};
