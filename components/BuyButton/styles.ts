import styled from 'styled-components';

export const BuyButtonContainer = styled.button`
    width: 100%;
    height: 30px;
    background-color: #0f52ba;
    color: #ffffff;

    border-radius: 0px 0px 8px 8px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-weight: 500;
    font-size: 14px;
    line-height: 18px;

    position: absolute;
    bottom: 0;
    cursor: pointer;
    border: none;
`;

export const BuyButtonImage = styled.img.attrs(() => ({
    src: 'https://svgshare.com/i/pu0.svg',
}))`
    width: 15px;
    height: 15px;
    margin-right: 10px;
`;
