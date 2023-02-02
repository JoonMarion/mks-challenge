import React, { createContext, useState } from 'react';
import ShoppingCart from '../ShoppingCart/ShoppingCart';

interface ModalContextType {
    isOpen: boolean;
    toggle: () => void;
}

export const ModalContext = createContext<ModalContextType>({
    isOpen: false,
    toggle: () => {},
});

interface ModalProviderProps {
    children: React.ReactNode;
}

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return <ModalContext.Provider value={{ isOpen, toggle }}>{children}</ModalContext.Provider>;
};
