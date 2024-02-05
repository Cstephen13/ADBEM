import './styes/card.css';

export type ButtonCard = {
    primaryButtonText: string,
    secondaryButtonText: string
}
const Footer = ({ primaryButtonText, secondaryButtonText }: ButtonCard )=>{
    return (
        <div className="card-atom">
            <button className="card-atom__button card-atom__button--primary">{primaryButtonText}</button>
            <button className="card-atom__button card-atom__button--secondary">{secondaryButtonText}</button>
        </div>
    );
}

export default Footer;
