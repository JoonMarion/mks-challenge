import { useAppDispatch } from '../../hooks/useAppDispatch';
import { iProduct } from '../../interfaces/iProduct';
import { addProductToCart, cartProduct } from '../../store/reducers/Cart';
import BuyButton from '../Buttons/BuyButton/BuyButton';
import {
    Card,
    ProductImage,
    ProductImageContent,
    ProductInfo,
    ProductName,
    ProductPrice,
    ProductDescription,
    DescriptionText,
} from './styles';

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
                <ProductImage src={props.photo} alt={props.name} />
            </ProductImageContent>

            <ProductInfo>
                <ProductName>{props.name}</ProductName>
                <ProductPrice>R${props.price.replace(/(^0+(?=\d))|(.?0+$)/g, '')}</ProductPrice>
            </ProductInfo>

            <ProductDescription>
                <DescriptionText>{props.description}</DescriptionText>
            </ProductDescription>

            <BuyButton onClick={() => handleAddProduct({ product: { ...props, qtd: 1 }, quantity: 1 })} />
        </Card>
    );
}
