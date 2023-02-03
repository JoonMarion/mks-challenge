import styled from 'styled-components';

export const ShoppingCartScreen = styled.div`
    height: 100vh;
    width: 100vw;
    background: rgba(0, 0, 0, 0.2);
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 3;
`;

export const ShoppingCartContainer = styled.div`
    height: 100vh;
    width: 486px;
    background: #0f52ba;
    box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
    position: fixed;
    top: 0;
    right: 0;
    z-index: 4;

    @media only screen and (max-width: 486px) {
        width: 100%;
    }
`;

export const ShoppingCartHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 30px;
    z-index: 2;

    .header-text {
        font-family: 'Montserrat';
        font-style: normal;

        font-weight: 700;
        font-size: 27px;

        color: #ffffff;
        width: 230px;
    }

    @media only screen and (max-width: 486px) {
        font-weight: 700;
        font-size: 24px;
    }
`;

export const ShoppingCartItems = styled.div`
    height: 60%;
    width: 100%;
    overflow-y: auto;

    ::-webkit-scrollbar {
        width: 0px;
    }
`;

export const TotalCart = styled.div`
    height: 15%;
    width: 486px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    bottom: 87px;
    background-color: #0f52ba;

    .total-cart-text {
        font-weight: 700;
        font-size: 28px;
        line-height: 15px;
        color: #ffffff;
        margin: 0 40px;
    }
`;
