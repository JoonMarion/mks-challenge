import React, { useEffect, useState } from 'react';
import { Navbar } from '../components/Navbar/Navbar';
import { Container, SkeletonWrapper } from './styles';
import { List } from '../components/List/List';
import { Footer } from '../components/Footer/Footer';
import Skeleton from '../components/Skeleton';
import { useDispatch, useSelector } from 'react-redux';
import { useProducts } from '../store/reducers/Products';
import { fetchProducts } from '../store/actions/Products';

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);
    const products = useSelector(useProducts);
    const dispatch = useDispatch<any>();
    const Arr = [1, 2, 3, 4, 5, 6, 7, 8];

    useEffect(() => {
        dispatch(fetchProducts());
        setIsLoading(false);
    }, [dispatch]);

    if (isLoading) {
        return (
            <div>
                <Navbar />
                <Container>
                    <SkeletonWrapper>
                        {Arr.map((item, index) => (
                            <Skeleton />
                        ))}
                    </SkeletonWrapper>
                </Container>
                <Footer />
            </div>
        );
    }

    return (
        <div>
            <Navbar />
            <Container>
                <List items={products} />
            </Container>
            <Footer />
        </div>
    );
};

export default Home;
