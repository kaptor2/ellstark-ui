import React from 'react';

import * as Styled from './styles';

export const TabPanel = React.memo(() => {
    return (
        <Styled.Container>
            <Styled.TabItem>1</Styled.TabItem>
            <Styled.TabItem>2</Styled.TabItem>
            <Styled.TabItem>3</Styled.TabItem>
            <Styled.TabItem>4</Styled.TabItem>
        </Styled.Container>
    );
});
