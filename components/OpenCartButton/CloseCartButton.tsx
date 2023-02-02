import { useContext } from 'react';
import { CloseCart } from './styles';
import { OpenContext } from '../Navbar/Navbar';

export const CloseCartButton: React.FC = () => {
    const [open, setOpen] = useContext(OpenContext);

    return (
        <>
            <CloseCart onClick={() => setOpen(!open)} />
        </>
    );
};
