import { useEffect, useState } from 'react';
import './ProductInfo.scss';

const ProductInfo = ({url}) => {
    const [product, setProduct] = useState("");

    useEffect(() => {
        fetch("https://makeup-api.herokuapp.com/api/v1/products/139.json")
            .then((response) => response.json())
            .then((data) => setProduct(data))
            .catch((err) => console.log(err));
    }, [url]);

    return (
        <div className="wrapper">
            <div className="product">
                <div className="product__img-wrapper">
                    <img className="product__img" src={product.image_link} alt={product.name}></img>
                </div>
                <div className="product__details">
                    <div className="product__info">
                        <h1 className="product__name">NAME: {product.name}</h1>
                        <h3 className="product__tagline">BRAND: {product.brand}</h3>
                        <h3 className="product__tagline">RATING: {product.rating}</h3>
                        <p className="product__description">
                            {product.description}
                        </p>
                    </div>
                    <div className="product__buy">
                        <h3 className="product__tagline">PRICE: {product.price} $</h3>
                        <button className="product__button">Buy now</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProductInfo;