import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store';
import Modal from '../modal/Modal';
import './ProductInfo.scss';

const ProductInfo = ({id}) => {
    const [product, setProduct] = useState("");
    const [modal, setModal] = useState(false);
    const dispatch = useDispatch();

    const handleAddProduct = (img, brand, name, price) => {
        dispatch(addToCart({ img, brand, name, price: `${price}$` }));
        setModal(true);
    };

    const closeModal = () => {
        setModal(false);
    };

    useEffect(() => {
        fetch(`https://makeup-api.herokuapp.com/api/v1/products/${id}.json`)
            .then((response) => response.json())
            .then((data) => setProduct(data))
            .catch((err) => console.log(err));
    }, [id]);

    return (
        <>
        <div className="wrapper">
            <div className="product">
                <div className="product__img-wrapper">
                    <img className="product__img" src={product.image_link} alt={product.name}></img>
                </div>
                <div className="product__details">
                    <div className="product__info">
                        <h1 className="product__name">NAME: {product.name}</h1>
                        <h3 className="product__tagline">BRAND: {product.brand}</h3>
                        <p className="product__description">
                            {product.description}
                        </p>
                    </div>
                    <div className="product__buy">
                        <h3 className="product__price">PRICE: {product.price} $</h3>
                        <button className="product__button"
                                onClick={()=> handleAddProduct(product.image_link, product.brand, product.name, product.price)}>
                                Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
        {modal ? <Modal closeModal={closeModal}/> : null}
        </>
    )
};

export default ProductInfo;