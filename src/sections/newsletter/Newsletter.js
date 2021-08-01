import Button from '../../components/button/Button';
import './Newsletter.scss';

const Newsletter = () => {
    return (
        <div className="newsletter wrapper">
            <div className="newsletter__img">
                <div className="newsletter__form-wrapper">
                    <div className="newsletter__headline">SUBSCRIBE TO OUR NEWSLETTER AND RECEIVE
                        10% DICSOUNT FOR YOUR FIRST ORDER!</div>
                    <div className="newsletter__form">
                        <input className="newsletter__input "type="mail"></input>
                        <Button className="newsletter__button" text="Zapisz się"/>
                    </div>
                    <div className="newsletter__consent">
                        <input type="checkbox"></input>
                        <p className="newsletter__consent-text">I want to receive commercial information 
                            about products, promotions and events to the email address
                            provided in accordance with the Regulations of the newsletter service.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Newsletter;