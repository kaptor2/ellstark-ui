import React from 'react';
import {storiesOf} from '@storybook/react';

import {SideBar} from '../SideBar';

const stories = storiesOf('SideBar', module);

stories.add('SideBar', () => {
    return <SideBar />;
});
