import React, {useCallback, useState} from 'react';

import * as Styled from './styles';

type TelevisorProps = {
    leftMenu: () => JSX.Element;
    content: () => JSX.Element;
};

export const Televisor: React.FC<TelevisorProps> = ({leftMenu, content}) => {
    const [hover, setHover] = useState(false);

    const onMouseOver = useCallback(() => {
        setHover(true);
    }, []);

    const onMouseOut = useCallback(() => {
        setHover(false);
    }, []);

    return (
        <Styled.Container>
            <Styled.LeftMenu {...{onMouseOver, onMouseOut}}>{leftMenu()}</Styled.LeftMenu>
            <Styled.ContentContainer>
                <Styled.Content rotate={hover}>{content()}</Styled.Content>
            </Styled.ContentContainer>
        </Styled.Container>
    );
};
