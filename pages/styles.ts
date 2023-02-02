import styled from 'styled-components';

export const Container = styled.div`
    height: auto;
    min-height: 600px;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2rem 0;
`;

export const SkeletonWrapper = styled.div`
    display: flex;
    justify-content: center;

    flex-wrap: wrap;
    gap: 22px;

    max-width: 1000px;
`;
