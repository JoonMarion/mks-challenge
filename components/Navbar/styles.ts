import styled from 'styled-components';

export const NavbarContainer = styled.div`
    width: 100vw;
    height: 100px;
    background-color: #0f52ba;
`;

export const NavbarContent = styled.div`
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 65px;
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
`;

export const NavbarSmallTitle = styled.p`
    font-weight: 300;
    font-size: 20px;
    line-height: 19px;

    height: 30px;
    display: flex;
    align-items: end;
`;
