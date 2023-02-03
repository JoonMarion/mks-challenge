import React from 'react';
import { RemoveCartItem } from './styles';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { removeProductFromCart } from '../../../store/reducers/Cart';

interface ActionRemoveProductProps {
    productId: string;
}

const RemoveCartItemButton = ({ props }) => {
    const dispatch = useAppDispatch();

    function handleRemoveProduct(id: ActionRemoveProductProps) {
        dispatch(removeProductFromCart(id));
    }

    return <RemoveCartItem onClick={() => handleRemoveProduct({ productId: props.id.toString() })} />;
};

export default RemoveCartItemButton;
