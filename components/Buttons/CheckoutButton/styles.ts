import styled from 'styled-components';

export const CheckoutButtonContainer = styled.button`
    width: 486px;
    height: 87px;

    display: flex;
    justify-content: center;
    align-items: center;

    position: fixed;
    bottom: 0;
    cursor: pointer;

    font-weight: 700;
    font-size: 28px;
    line-height: 15px;

    background: #000000;
    color: #ffffff;

    @media only screen and (max-width: 486px) {
        width: 100%;
    }
`;
