import styled from 'styled-components';

export const ShoppingCartContainer = styled.div`
    height: 100vh;
    width: 486px;
    background: #0f52ba;
    box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
    position: fixed;
    top: 0;
    right: 0;
    z-index: 100;
`;

export const ShoppingCartHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 30px;
`;

export const ShoppingCartHeaderText = styled.h1`
    font-family: 'Montserrat';
    font-style: normal;

    font-weight: 700;
    font-size: 27px;

    color: #ffffff;
    width: 180px;
`;
