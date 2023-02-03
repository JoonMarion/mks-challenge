import { useAppDispatch } from '../../hooks/useAppDispatch';
import { iProduct } from '../../interfaces/iProduct';
import { removeProductFromCart, updateProductQuantity } from '../../store/reducers/Cart';
import { CartItemContainer, CartItemContent, CartItemImage, CartQtdItem, CartQtdItemControl } from './styles';

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
                <div className="cart-item-title">{props.name}</div>
                <CartQtdItem>
                    <div className="qtd-text">Qtd:</div>
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
                <div className="cart-item-price">R${props.price.replace(/(^0+(?=\d))|(.?0+$)/g, '')}</div>
            </CartItemContent>
        </CartItemContainer>
    );
}
