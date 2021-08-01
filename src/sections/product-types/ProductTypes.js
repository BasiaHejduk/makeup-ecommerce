import { Link } from 'react-router-dom';
import Button from '../../components/button/Button';
import './ProductTypes.scss';

const ProductTypes = () => {
    return (
        <div className="types wrapper">
            <div className="types__img types__img--1">
                <Link to="/shop"><Button text="BLUSH"/></Link>
            </div>
            <div className="types__img types__img--2">
                <Link to="/shop"><Button text="BRONZER"/></Link>
            </div>
            <div className="types__img types__img--3">
                <Link to="/shop"><Button text="EYEBROW"/></Link>
            </div>
            <div className="types__img types__img--4">
                <Link to="/shop"><Button text="EYELINER"/></Link>
            </div>
            <div className="types__img types__img--5">
                <Link to="/shop"><Button text="EYESHADOW"/></Link>
            </div>
            <div className="types__img types__img--6">
                <Link to="/shop"><Button text="FOUNDATION"/></Link>
            </div>
            <div className="types__img types__img--7">
                <Link to="/shop"><Button text="LIP LINER"/></Link>
            </div>
            <div className="types__img types__img--8">
                <Link to="/shop"><Button text="LIPSTICK"/></Link>
            </div>
            <div className="types__img types__img--9">
                <Link to="/shop"><Button text="MASCARA"/></Link>
            </div>
            <div className="types__img types__img--10">
                <Link to="/shop"><Button text="NAIL POLISH"/></Link>
            </div>
        </div>
    )
};

export default ProductTypes;