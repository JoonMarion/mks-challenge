import { useEffect, useState } from 'react';
import { iProduct } from '../../interfaces/iProduct';
import { ListItem } from '../ListItem/ListItem';
import { ListContainer, SkeletonWrapper } from './styles';
import { fetchProducts } from '../../services/api';
import Skeleton from '../Skeleton';

export default function List() {
    const [products, setProducts] = useState<iProduct[] | []>([]);
    const [isLoading, setIsLoading] = useState(true);

    const Arr = [1, 2, 3, 4, 5, 6, 7, 8];

    useEffect(() => {
        setIsLoading(false);
        fetchProducts().then((response) => {
            setProducts(response.products);
        });
    }, []);

    if (isLoading) {
        return (
            <SkeletonWrapper>
                {Arr.map((item, index) => (
                    <Skeleton />
                ))}
            </SkeletonWrapper>
        );
    } else {
        return (
            <ListContainer>
                {products.map((item, index) => (
                    <ListItem key={index} {...item} />
                ))}
            </ListContainer>
        );
    }
}
