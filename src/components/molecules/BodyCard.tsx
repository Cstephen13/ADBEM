
import Footer from '../atoms/Footer.tsx';
import './styles/bodyCard.css';
import {Card} from '../../utils/customTypes'
const BodyCard = ({ title, text, primaryButtonText, secondaryButtonText, children }: Card) => {
    return (
        <div className="card-molecule">
            <h2 className="card-atom__title">{title}</h2>
            <p className="card-atom__text">{text}</p>
            {children}
            <Footer
                primaryButtonText={primaryButtonText}
                secondaryButtonText={secondaryButtonText}
            />
        </div>
    );
};

export default BodyCard;
