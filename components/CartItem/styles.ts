import styled from 'styled-components';

export const CartItemContainer = styled.div`
    width: 100%;
    display: flex;

    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 28px;
    margin-top: 5px;
`;

export const CartItemContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    width: 379px;
    height: 95px;

    background: #ffffff;
    box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
    border-radius: 8px;

    .cart-item-title {
        font-weight: 400;
        font-size: 13px;
        line-height: 17px;
        color: #2c2c2c;
        width: 30%;
    }

    .cart-item-price {
        font-weight: 700;
        font-size: 14px;
        line-height: 17px;
        color: #000000;
        width: 20%;
        margin: 0 10px;
    }

    @media only screen and (max-width: 400px) {
        width: 300px;
    }
`;

export const CartItemImage = styled.img`
    width: 20%;
    margin: 0 10px;
`;

export const CartQtdItem = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 10px;

    font-weight: 400;
    font-size: 7px;
    line-height: 8px;
    width: 30%;

    .qtd-text {
        width: 50px;
        text-align: left;
    }
`;

export const CartQtdItemControl = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    border: 1px solid #bfbfbf;
    border-radius: 4px;
    margin-top: 4px;

    width: 100%;
    height: 19px;
    width: 50px;
    font-size: 10px;

    .control-button {
        border: none;
        cursor: pointer;
        background: none;
    }
`;
