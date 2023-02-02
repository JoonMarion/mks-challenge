import { iProduct } from '../../interfaces/iProduct';
import { ListItem } from '../ListItem/ListItem';
import { ListContainer } from './styles';

type ListProps = {
    items: iProduct[];
};

export const List: React.FC<ListProps> = ({ items }) => {
    return (
        <>
            <ListContainer>
                {items.map((item, index) => (
                    <ListItem key={index} {...item} />
                ))}
            </ListContainer>
        </>
    );
};
