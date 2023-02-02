import React, { useContext } from 'react';
import {
    ShoppingCartContainer,
    ShoppingCartHeader,
    ShoppingCartHeaderText,
    ShoppingCartItems,
    ShoppingCartScreen,
    TotalCart,
    TotalCartText,
} from './styles';
import { useAppDispatch, useAppSelector } from '../../hooks/useAppDispatch';
import { cartState, clearCart } from '../../store/reducers/Cart';
import { ModalContext } from '../ModalProvider/ModalProvider';
import CloseCartButton from '../Buttons/OpenCartButton/CloseCartButton';
import { CartItem } from '../CartItem/CartItem';
import CheckoutButton from '../Buttons/CheckoutButton/CheckoutButton';

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
        <ShoppingCartScreen>
            <ShoppingCartContainer>
                <ShoppingCartHeader>
                    <ShoppingCartHeaderText>Carrinho de compras</ShoppingCartHeaderText>
                    <CloseCartButton />
                </ShoppingCartHeader>

                <ShoppingCartItems>
                    {cart.items.length === 0 ? (
                        <ShoppingCartHeader>
                            <ShoppingCartHeaderText>Carrinho vazio...</ShoppingCartHeaderText>
                        </ShoppingCartHeader>
                    ) : (
                        cart.items.map((elem) => <CartItem key={elem.id} {...elem} />)
                    )}
                </ShoppingCartItems>

                <TotalCart>
                    <TotalCartText>Total:</TotalCartText>
                    <TotalCartText>R${cart.total}</TotalCartText>
                </TotalCart>

                <CheckoutButton />
            </ShoppingCartContainer>
        </ShoppingCartScreen>
    ) : null;
};

export default ShoppingCart;
