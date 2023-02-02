import { NavbarContainer, NavbarContent, NavbarSmallTitle, NavbarTitle } from './styles';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import OpenCartButton from '../OpenCartButton/OpenCartButton';
import { ModalProvider } from '../ModalProvider/ModalProvider';

export const Navbar = () => {
    return (
        <NavbarContainer>
            <NavbarContent>
                <NavbarTitle>
                    MKS<NavbarSmallTitle>Sistemas</NavbarSmallTitle>
                </NavbarTitle>
                <ModalProvider>
                    <OpenCartButton />
                    <ShoppingCart />
                </ModalProvider>
            </NavbarContent>
        </NavbarContainer>
    );
};
