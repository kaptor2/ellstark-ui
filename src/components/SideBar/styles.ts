import styled from '@emotion/styled';

type ContainerProps = {
    color: string;
};

export const Container = styled.div<ContainerProps>(({color}) => {
    return {
        backgroundColor: color,
    };
});
