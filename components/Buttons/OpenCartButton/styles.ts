import styled from 'styled-components';

export const OpenCartContainer = styled.div`
    height: 30px;
    background-color: #ffffff;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 90px;
    height: 45px;
    border-radius: 8px;

    margin-right: 70px;

    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    color: #000000;
`;

export const OpenCartImage = styled.img.attrs(() => ({
    src: 'https://svgshare.com/i/ptS.svg',
}))`
    width: 18px;
    height: 19px;
    margin-right: 10px;
`;

export const CloseCart = styled.img.attrs(() => ({
    src: 'https://svgshare.com/i/pxp.svg',
}))`
    width: 38px;
    height: 38px;
    margin-right: 20px;
    cursor: pointer;
`;
