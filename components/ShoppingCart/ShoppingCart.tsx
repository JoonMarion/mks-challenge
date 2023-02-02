import React, { useState } from 'react';
import { ShoppingCartProps } from '../../interfaces/iShoppingCart';
import { ShoppingCartContainer, ShoppingCartHeader, ShoppingCartHeaderText } from './styles';
import { iProduct } from '../../interfaces/iProduct';
import { CloseCartButton } from '../OpenCartButton/CloseCartButton';

export const retrieveDataFromLocalStorage = (): iProduct[] => {
    const storedData = localStorage.getItem('cart');
    return storedData ? JSON.parse(storedData) : [];
};

const ShoppingCart: React.FC<ShoppingCartProps> = ({ open }) => {
    const [cart, setCart] = useState<iProduct[]>(retrieveDataFromLocalStorage());

    return (
        <ShoppingCartContainer open={open}>
            <ShoppingCartHeader>
                <ShoppingCartHeaderText>Carrinho de compras</ShoppingCartHeaderText>
                <CloseCartButton />
            </ShoppingCartHeader>

            {cart.map((item) => (
                <p key={item.id}>
                    {item.name} - {item.price}
                </p>
            ))}
        </ShoppingCartContainer>
    );
};

export default ShoppingCart;
