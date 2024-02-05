import BodyCard from '../molecules/BodyCard.tsx';
import './styles/card.css';

const Card = () => {
    return (
        <div className="card-organism">
            <BodyCard
                primaryButtonText={'Aceptar'}
                text={"some Text"}
                title={'Some Title'}
                secondaryButtonText={'Cancelar'}>
                <p>sdsdsdsdsd</p>
            </BodyCard>
        </div>
    );
};

export default Card;
