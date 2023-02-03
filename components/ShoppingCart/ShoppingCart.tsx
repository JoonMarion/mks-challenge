import React, { useContext } from 'react';
import { ShoppingCartContainer, ShoppingCartHeader, ShoppingCartItems, ShoppingCartScreen, TotalCart } from './styles';
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

    return isOpen ? (
        <ShoppingCartScreen>
            <ShoppingCartContainer>
                <ShoppingCartHeader>
                    <div className="header-text">Carrinho de compras</div>
                    <CloseCartButton />
                </ShoppingCartHeader>

                <ShoppingCartItems>
                    {cart.items.length === 0 ? (
                        <ShoppingCartHeader>
                            <div className="header-text">Carrinho vazio...</div>
                        </ShoppingCartHeader>
                    ) : (
                        cart.items.map((elem) => <CartItem key={elem.id} {...elem} />)
                    )}
                </ShoppingCartItems>

                <TotalCart>
                    <div className="total-cart-text">Total:</div>
                    <div className="total-cart-text">R${cart.total}</div>
                </TotalCart>

                <CheckoutButton />
            </ShoppingCartContainer>
        </ShoppingCartScreen>
    ) : null;
};

export default ShoppingCart;
