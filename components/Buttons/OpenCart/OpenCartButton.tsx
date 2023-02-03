import { useContext } from 'react';
import { OpenCartContainer, OpenCartImage } from './styles';
import { ModalContext } from '../../ModalProvider/ModalProvider';
import { useAppSelector } from '../../../hooks/useAppDispatch';
import { cartState } from '../../../store/reducers/Cart';

const OpenCartButton: React.FC = () => {
    const { toggle } = useContext(ModalContext);
    const cart = useAppSelector(cartState);

    return (
        <OpenCartContainer onClick={toggle}>
            <OpenCartImage />
            {cart.items.length}
        </OpenCartContainer>
    );
};

export default OpenCartButton;
