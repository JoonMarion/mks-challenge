import { useAppDispatch } from '../../hooks/useAppDispatch';
import { iProduct } from '../../interfaces/iProduct';
import { removeProductFromCart, updateProductQuantity } from '../../store/reducers/Cart';
import {
    CartItemContainer,
    CartItemContent,
    CartItemImage,
    CartItemName,
    CartItemPrice,
    CartQtdItem,
    CartQtdItemControl,
} from './styles';

interface ActionRemoveProductProps {
    productId: string;
}

interface ActionUpdateProductProps {
    product: iProduct;
    operator: string;
}

export function CartItem(props: iProduct) {
    const dispatch = useAppDispatch();

    function handleRemoveProduct(id: ActionRemoveProductProps) {
        dispatch(removeProductFromCart(id));
    }

    function handleUpdate(updateInfo: ActionUpdateProductProps) {
        dispatch(updateProductQuantity(updateInfo));
    }

    return (
        <CartItemContainer>
            <CartItemContent>
                <CartItemImage src={props.photo} alt={props.name} />
                <CartItemName>{props.name}</CartItemName>
                <CartQtdItem>
                    Qtd:
                    <CartQtdItemControl>
                        <button
                            className="control-button"
                            onClick={() => handleUpdate({ product: { ...props }, operator: 'sub' })}
                        >
                            -
                        </button>
                        |<p>{props.qtd}</p>|
                        <button
                            className="control-button"
                            onClick={() => handleUpdate({ product: { ...props }, operator: 'sum' })}
                        >
                            +
                        </button>
                    </CartQtdItemControl>
                </CartQtdItem>
                <CartItemPrice>R${props.price}</CartItemPrice>
            </CartItemContent>
        </CartItemContainer>
    );
}
