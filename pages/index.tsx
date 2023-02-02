import React from 'react';
import { Navbar } from '../components/Navbar/Navbar';
import { Container } from './styles';
import { Footer } from '../components/Footer/Footer';
import List from '../components/List/List';

const Home = () => {
    return (
        <>
            <Navbar />
            <Container>
                <List />
            </Container>
            <Footer />
        </>
    );
};

export default Home;
