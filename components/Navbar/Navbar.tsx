import { createContext, useState } from 'react';

import { NavbarContainer, NavbarContent, NavbarSmallTitle, NavbarTitle } from './styles';

import ShoppingCart from '../ShoppingCart/ShoppingCart';
import { OpenCartButton } from '../OpenCartButton/OpenCartButton';

export const OpenContext = createContext<[boolean, (open: boolean) => void]>([false, () => {}]);

export const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <NavbarContainer>
            <NavbarContent>
                <NavbarTitle>
                    MKS<NavbarSmallTitle>Sistemas</NavbarSmallTitle>
                </NavbarTitle>
                <OpenCartButton onClick={() => setOpen(!open)} />
                <OpenContext.Provider value={[open, setOpen]}>
                    <ShoppingCart open={open} />
                </OpenContext.Provider>
            </NavbarContent>
        </NavbarContainer>
    );
};
