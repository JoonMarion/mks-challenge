import { useContext } from 'react';
import { iProduct } from '../../interfaces/iProduct';
import { iButton } from '../../interfaces/iButton';
import { OpenContext } from '../Navbar/Navbar';
import { OpenCartContainer, OpenCartImage } from './styles';

const retrieveDataFromLocalStorage = (): iProduct[] => {
    const storedData = localStorage.getItem('cart');
    return storedData ? JSON.parse(storedData) : [];
};

const cart = retrieveDataFromLocalStorage();

export const OpenCartButton: React.FC<iButton> = ({ onClick }) => {
    const [open, setOpen] = useContext(OpenContext);

    return (
        <OpenCartContainer onClick={() => setOpen(!open)}>
            <OpenCartImage />({cart.length})
        </OpenCartContainer>
    );
};
