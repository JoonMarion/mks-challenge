import styled from 'styled-components';

export const Card = styled.div`
    display: flex;
    flex-direction: column;

    height: 285px;
    width: 217.5617218017578px;
    border-radius: 8px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
    position: relative;

    @media only screen and (max-width: 455px) {
        width: 300px;
        height: 300px;
    }
`;

export const ProductImageContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    min-height: 136px;
    width: 100%;
    padding: 18px;

    .card-list-img {
        height: auto;
        width: 100px;
    }
`;

export const ProductInfo = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 14px;

    .product-info-name {
        max-width: 125px;
        min-height: 38px;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #2c2c2c;
    }

    .product-info-price {
        background: #373737;
        color: #ffffff;

        border-radius: 5px;
        padding: 0 0.4rem;
        width: auto;
        height: 26px;

        font-weight: 700;
        font-size: 15px;
        line-height: 15px;

        display: flex;
        align-items: center;
    }
`;

export const ProductDescription = styled.div`
    display: flex;

    padding: 14px 14px 0 14px;

    .product-description-text {
        font-weight: 300;
        font-size: 10px;
        line-height: 12px;
        height: 60px;

        color: #2c2c2c;
    }
`;
