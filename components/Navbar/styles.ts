import styled from 'styled-components';

export const NavbarContainer = styled.div`
    width: 100vw;
    height: 100px;
    background-color: #0f52ba;
    position: relative;
`;

export const NavbarContent = styled.div`
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 65px;

    @media only screen and (max-width: 500px) {
        margin-left: 40px;
    }
`;

export const NavbarTitle = styled.div`
    display: flex;
    align-items: center;
    color: #ffffff;
    height: 100%;

    font-weight: 600;
    font-size: 40px;
    line-height: 19px;
    display: flex;

    .small-title {
        font-weight: 300;
        font-size: 20px;
        line-height: 19px;

        height: 30px;
        display: flex;
        align-items: end;
    }

    @media only screen and (max-width: 500px) {
        font-weight: 600;
        font-size: 30px;
        line-height: 17px;
    }
`;
