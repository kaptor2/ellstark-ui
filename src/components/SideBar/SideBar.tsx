import React from 'react';

import {TabPanel} from './components';
import * as Styled from './styles';

export const SideBar = React.memo(() => {
    return (
        <Styled.Container>
            <TabPanel />
        </Styled.Container>
    );
});
