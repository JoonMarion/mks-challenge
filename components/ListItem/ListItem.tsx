import { iProduct } from '../../interfaces/iProduct';
import { BuyButton } from '../BuyButton/BuyButton';
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

export const ListItem: React.FC<iProduct> = ({ id, name, brand, description, photo, price }) => {
    function addToCart({ id, name, brand, description, photo, price }: iProduct) {
        let cart: iProduct[] = [];
        if (localStorage.getItem('cart')) {
            cart = JSON.parse(localStorage.getItem('cart')) as iProduct[];
        }
        cart.push({ id, name, brand, description, photo, price });
        localStorage.setItem('cart', JSON.stringify(cart));
    }
    return (
        <Card>
            <ProductImageContent>
                <ProductImage src={photo} alt={name} />
            </ProductImageContent>

            <ProductInfo>
                <ProductName>{name}</ProductName>
                <ProductPrice>R${price.replace(/(^0+(?=\d))|(.?0+$)/g, '')}</ProductPrice>
            </ProductInfo>

            <ProductDescription>
                <DescriptionText>{description}</DescriptionText>
            </ProductDescription>

            <BuyButton onClick={() => addToCart({ id, name, brand, description, photo, price })} />
        </Card>
    );
};
