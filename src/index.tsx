import React from 'react';

export const Thing: React.FC = ({children}) => {
    return <div>{children || 'the snozzberries taste like snozzberries'}</div>;
};
