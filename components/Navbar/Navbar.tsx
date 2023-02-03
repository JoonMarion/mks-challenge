import { NavbarContainer, NavbarContent, NavbarTitle } from './styles';
import ShoppingCart from '../Cart/Cart';
import OpenCartButton from '../Buttons/OpenCart/OpenCartButton';
import { ModalProvider } from '../ModalProvider/ModalProvider';

export const Navbar = () => {
    return (
        <NavbarContainer>
            <NavbarContent>
                <NavbarTitle>
                    MKS<span className="small-title">Sistemas</span>
                </NavbarTitle>
                <ModalProvider>
                    <OpenCartButton />
                    <ShoppingCart />
                </ModalProvider>
            </NavbarContent>
        </NavbarContainer>
    );
};
