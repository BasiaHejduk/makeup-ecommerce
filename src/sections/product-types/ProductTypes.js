import { Link } from 'react-router-dom';
import Button from '../../components/button/Button';
import './ProductTypes.scss';

const ProductTypes = () => {

    return (
        <div className="types wrapper">
            <div className="types__img types__img--1">
                <Link to="/shop/bronzer"><Button text="BRONZER"/></Link>
            </div>
            <div className="types__img types__img--2">
                <Link to="/shop/blush"><Button text="BLUSH"/></Link>
            </div>
            <div className="types__img types__img--3">
                <Link to="/shop/eyebrow"><Button text="EYEBROW"/></Link>
            </div>
            <div className="types__img types__img--4">
                <Link to="/shop/eyeliner"><Button text="EYELINER"/></Link>
            </div>
            <div className="types__img types__img--5">
                <Link to="/shop/eyeshadow"><Button text="EYESHADOW"/></Link>
            </div>
            <div className="types__img types__img--6">
                <Link to="/shop/foundation"><Button text="FOUNDATION"/></Link>
            </div>
            <div className="types__img types__img--7">
                <Link to="/shop/lip liner"><Button text="LIP LINER"/></Link>
            </div>
            <div className="types__img types__img--8">
                <Link to="/shop/lipstick"><Button text="LIPSTICK"/></Link>
            </div>
            <div className="types__img types__img--9">
                <Link to="/shop/mascara"><Button text="MASCARA"/></Link>
            </div>
            <div className="types__img types__img--10">
                <Link to="/shop/nail polish"><Button text="NAIL POLISH"/></Link>
            </div>
        </div>
    )
};

export default ProductTypes;