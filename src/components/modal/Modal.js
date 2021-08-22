import { Link } from 'react-router-dom';
import './Modal.scss';

const Modal = ({closeModal, modalImg}) => {
    return (
        <div className="modal">
            <button className="modal__close" onClick={closeModal}>X</button>
            <p className="modal__text">PRODUCT ADDED TO YOUR CART!</p>
            <div className="modal__img-wrapper">
                <img className="modal__img" src={modalImg} alt=""></img>
            </div>
            <div className="modal__buttons-wrapper">
                <Link to="/cart">
                    <button className="modal__button modal__button--cart">GO TO CART</button>
                </Link>
                <button className="modal__button modal__button--shop" onClick={closeModal}>CONTINUE SHOPPING</button>
            </div>
        </div>
    )
};

export default Modal;