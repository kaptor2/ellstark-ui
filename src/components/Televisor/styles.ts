import Styled from '@emotion/styled';

type Props = {
    Content: {rotate: boolean};
};

export const Container = Styled.div(() => {
    return {
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
    };
});

export const ContentContainer = Styled.div(() => {
    const perspective = 1000;

    return {
        position: 'absolute',
        left: 100,
        flex: 1,
        perspective,
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

export const LeftMenu = Styled.div(() => {
    const width = 300;
    const maxWidth = 300;

    return {
        height: '100%',
        width,
        maxWidth,
    };
});
