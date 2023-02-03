import { useAppDispatch } from '../../hooks/useAppDispatch';
import { iProduct } from '../../interfaces/iProduct';
import { addProductToCart, cartProduct } from '../../store/reducers/Cart';
import BuyButton from '../Buttons/BuyButton/BuyButton';
import { Card, ProductImageContent, ProductInfo, ProductDescription } from './styles';

interface ActionAddProductProps {
    product: cartProduct;
    quantity: number;
}

export default function ListItem(props: iProduct) {
    const dispatch = useAppDispatch();

    function handleAddProduct(product: ActionAddProductProps) {
        dispatch(addProductToCart(product));
    }

    return (
        <Card>
            <ProductImageContent>
                <img className="card-list-img" src={props.photo} alt={props.name} />
            </ProductImageContent>

            <ProductInfo>
                <div className="product-info-name">{props.name}</div>
                <div className="product-info-price">R${props.price.replace(/(^0+(?=\d))|(.?0+$)/g, '')}</div>
            </ProductInfo>

            <ProductDescription>
                <div className="product-description-text">{props.description}</div>
            </ProductDescription>

            <BuyButton onClick={() => handleAddProduct({ product: { ...props, qtd: 1 }, quantity: 1 })} />
        </Card>
    );
}
