import { Link } from 'react-router-dom';
import Button from '../../components/button/Button';
import './ProductTypes.scss';
import { source } from '../../common/helpers';

const ProductTypes = () => {

    const handleClickType = (text) => {
        source.fromWhere = text;
    };

    return (
        <div className="types wrapper">
            <div className="types__img types__img--1">
                <Link to="/shop" onClick={()=> handleClickType("BRONZER")}><Button text="BRONZER"/></Link>
            </div>
            <div className="types__img types__img--2">
                <Link to="/shop" onClick={()=> handleClickType("BLUSH")}><Button text="BLUSH"/></Link>
            </div>
            <div className="types__img types__img--3">
                <Link to="/shop" onClick={()=> handleClickType("EYEBROW")}><Button text="EYEBROW"/></Link>
            </div>
            <div className="types__img types__img--4">
                <Link to="/shop" onClick={()=> handleClickType("EYELINER")}><Button text="EYELINER"/></Link>
            </div>
            <div className="types__img types__img--5">
                <Link to="/shop" onClick={()=> handleClickType("EYESHADOW")}><Button text="EYESHADOW"/></Link>
            </div>
            <div className="types__img types__img--6">
                <Link to="/shop" onClick={()=> handleClickType("FOUNDATION")}><Button text="FOUNDATION"/></Link>
            </div>
            <div className="types__img types__img--7">
                <Link to="/shop" onClick={()=> handleClickType("LIP LINER")}><Button text="LIP LINER"/></Link>
            </div>
            <div className="types__img types__img--8">
                <Link to="/shop" onClick={()=> handleClickType("LIPSTICK")}><Button text="LIPSTICK"/></Link>
            </div>
            <div className="types__img types__img--9">
                <Link to="/shop" onClick={()=> handleClickType("MASCARA")}><Button text="MASCARA"/></Link>
            </div>
            <div className="types__img types__img--10">
                <Link to="/shop" onClick={()=> handleClickType("NAIL POLISH")}><Button text="NAIL POLISH"/></Link>
            </div>
        </div>
    )
};

export default ProductTypes;