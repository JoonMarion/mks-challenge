import { useContext } from 'react';
import { CloseCart } from './styles';
import { ModalContext } from '../../ModalProvider/ModalProvider';

const CloseCartButton: React.FC = () => {
    const { toggle } = useContext(ModalContext);

    return <CloseCart onClick={toggle} />;
};

export default CloseCartButton;
