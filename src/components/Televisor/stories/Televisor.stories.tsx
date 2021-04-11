import React from 'react';
import {storiesOf} from '@storybook/react';

import {Televisor} from '../Televisor';

const stories = storiesOf('Components', module);

stories.add('Televisor', () => {
    return (
        <Televisor
            leftMenu={() => {
                return <div style={{backgroundColor: 'red', width: '100vh', height: '95vh'}}></div>;
            }}
            content={() => {
                return <div style={{width: 'calc(100vw - 100px)', height: '95vh'}}></div>;
            }}
        />
    );
});
