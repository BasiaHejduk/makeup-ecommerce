import Button from '../../components/button/Button';
import './ProductTypes.scss';

const ProductTypes = () => {
    return (
        <div className="types wrapper">
            <div className="types__img types__img--1">
                <Button text="BLUSH"/>
            </div>
            <div className="types__img types__img--2">
                <Button text="BRONZER"/>
            </div>
            <div className="types__img types__img--3">
                <Button text="EYEBROW"/>
            </div>
            <div className="types__img types__img--4">
                <Button text="EYELINER"/>
            </div>
            <div className="types__img types__img--5">
                <Button text="EYESHADOW"/>
            </div>
            <div className="types__img types__img--6">
                <Button text="FOUNDATION"/>
            </div>
            <div className="types__img types__img--7">
                <Button text="LIP LINER"/>
            </div>
            <div className="types__img types__img--8">
                <Button text="LIPSTICK"/>
            </div>
            <div className="types__img types__img--9">
                <Button text="MASCARA"/>
            </div>
            <div className="types__img types__img--10">
                <Button text="NAIL POLISH"/>
            </div>
        </div>
    )
};

export default ProductTypes;