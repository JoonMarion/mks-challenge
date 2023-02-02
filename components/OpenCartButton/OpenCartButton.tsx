import { useContext } from 'react';
import { OpenCartContainer, OpenCartImage } from './styles';
import { ModalContext } from '../ModalProvider/ModalProvider';

const OpenCartButton: React.FC = () => {
    const { toggle } = useContext(ModalContext);

    return (
        <OpenCartContainer onClick={toggle}>
            <OpenCartImage />
        </OpenCartContainer>
    );
};

export default OpenCartButton;
