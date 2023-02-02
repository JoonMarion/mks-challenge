import React from 'react';
import { CheckoutButtonContainer } from './styles';
import { useAppDispatch, useAppSelector } from '../../../hooks/useAppDispatch';
import { cartState, clearCart } from '../../../store/reducers/Cart';

const CheckoutButton = () => {
    const dispatch = useAppDispatch();
    const cart = useAppSelector(cartState);

    function handleFinishShop() {
        if (cart.items.length !== 0) {
            dispatch(clearCart());
            alert('Compra finalizada!');
            window.location.reload();
        } else {
            alert('Carrinho vazio, adicione itens.');
        }
    }

    return <CheckoutButtonContainer onClick={() => handleFinishShop()}>Finalizar Compra</CheckoutButtonContainer>;
};

export default CheckoutButton;
