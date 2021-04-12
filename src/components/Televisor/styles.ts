import Styled from '@emotion/styled';

const OPENED_LEFT_MENU = 300;
const CLOSED_LEFT_MENU = 100;

type Props = {
    Content: {rotate: boolean};
    ContentContainer: {scale: boolean};
};

export const Container = Styled.div({
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
});

export const ContentContainer = Styled.div<Props['ContentContainer']>(({scale}) => {
    const perspective = 1000;

    return {
        position: 'absolute',
        flex: 1,

        left: scale ? OPENED_LEFT_MENU : CLOSED_LEFT_MENU,
        maxWidth: scale ? `calc(100% - ${OPENED_LEFT_MENU}px)` : '100%',
        perspective,

        transition: 'all 0.4s ease 0s',
        animationFillMode: 'forwards',
    };
});

export const Content = Styled.div<Props['Content']>(({rotate}) => {
    return {
        overflow: 'hidden',
        flex: 1,
        backgroundColor: 'blue',

        transform: `${rotate && 'rotateY(-10deg) scale(0.8, 0.85) translate(-6.5%, 0)'}`,
        borderRadius: rotate ? 0 : '25px 0 0 25px',

        transition: 'all 0.4s ease 0s',
        animationFillMode: 'forwards',
    };
});

export const LeftMenu = Styled.div({
    height: '100%',
    width: OPENED_LEFT_MENU,
    maxWidth: OPENED_LEFT_MENU,
});
