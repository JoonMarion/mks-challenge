import styled from 'styled-components';

export const ShoppingCartScreen = styled.div`
    height: 100vh;
    width: 100vw;
    background: rgba(0, 0, 0, 0.2);
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 99;
`;

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
    width: 230px;
`;

export const ShoppingCartItems = styled.div`
    height: 60%;
    width: 100%;
    overflow-y: scroll;
`;

export const TotalCart = styled.div`
    height: 80px;
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const TotalCartText = styled.div`
    font-weight: 700;
    font-size: 28px;
    line-height: 15px;
    color: #ffffff;
    margin: 0 40px;
`;
