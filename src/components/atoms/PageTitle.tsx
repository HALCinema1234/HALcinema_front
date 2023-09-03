import React from 'react';

interface PageTitleProps {
    title: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
    return (
        <h1
            style={{
                fontSize: '35px',
                fontWeight: 'bold',
                textAlign: 'center',
                color: '#38b2ac',
            }}
        >
            {title}
        </h1>
    );
};

export default PageTitle;
