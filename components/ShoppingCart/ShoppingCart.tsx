import React, { useContext } from 'react';
import { ShoppingCartContainer, ShoppingCartHeader, ShoppingCartHeaderText } from './styles';
import { useAppDispatch, useAppSelector } from '../../hooks/useAppDispatch';
import { cartState, clearCart } from '../../store/reducers/Cart';
import { ModalContext } from '../ModalProvider/ModalProvider';
import CloseCartButton from '../OpenCartButton/CloseCartButton';

const ShoppingCart: React.FC = () => {
    const dispatch = useAppDispatch();
    const cart = useAppSelector(cartState);
    const { isOpen, toggle } = useContext(ModalContext);

    function handleFinishShop() {
        if (cart.items.length !== 0) {
            dispatch(clearCart());
            alert('Compra finalizada com sucesso!');
        } else {
            alert('Seu carrinho está vazio.');
        }
    }

    return isOpen ? (
        <ShoppingCartContainer>
            <ShoppingCartHeader>
                <ShoppingCartHeaderText>Carrinho de compras</ShoppingCartHeaderText>
                <CloseCartButton />
            </ShoppingCartHeader>
        </ShoppingCartContainer>
    ) : null;
};

export default ShoppingCart;
