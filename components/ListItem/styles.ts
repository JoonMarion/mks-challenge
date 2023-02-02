import styled from 'styled-components';

export const Card = styled.div`
    display: flex;
    flex-direction: column;

    height: 285px;
    width: 217.5617218017578px;
    border-radius: 8px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
    position: relative;
`;

export const ProductImageContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    min-height: 136px;
    width: 100%;
    padding: 18px;
`;

export const ProductImage = styled.img`
    height: auto;
    width: 100px;
`;

export const ProductInfo = styled.div`
    display: flex;
    justify-content: space-between;

    padding: 0 14px;
`;

export const ProductName = styled.div`
    max-width: 125px;
    min-height: 38px;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #2c2c2c;
`;

export const ProductPrice = styled.div`
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
`;

export const ProductDescription = styled.div`
    display: flex;

    padding: 14px 14px 0 14px;
`;

export const DescriptionText = styled.p`
    font-weight: 300;
    font-size: 10px;
    line-height: 12px;
    height: 60px;

    color: #2c2c2c;
`;
