import { iButton } from '../../../interfaces/iButton';
import { BuyButtonContainer, BuyButtonImage } from './styles';

const BuyButton: React.FC<iButton> = ({ onClick }) => {
    return (
        <BuyButtonContainer onClick={onClick}>
            <BuyButtonImage />
            COMPRAR
        </BuyButtonContainer>
    );
};

export default BuyButton;
