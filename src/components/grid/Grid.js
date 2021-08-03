import { useEffect, useState } from 'react';
import './Grid.scss';
import { API_URL } from '../../common/helpers';

const Grid = ({type}) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {

        let linkToFetch = "";
        if (type === "all") {
            linkToFetch = API_URL;
        } else if (type === "bronzer") {
            linkToFetch = `${API_URL}?product_type=bronzer`;
        } else if (type === "blush") {
            linkToFetch = `${API_URL}?product_type=blush`;
        } else if (type === "eyebrow") {
            linkToFetch = `${API_URL}?product_type=eyebrow`;
        } else if (type === "eyeliner") {
            linkToFetch = `${API_URL}?product_type=eyeliner`;
        } else if (type === "eyeshadow") {
            linkToFetch = `${API_URL}?product_type=eyeshadow`;
        } else if (type === "foundation") {
            linkToFetch = `${API_URL}?product_type=foundation`;
        } else if (type === "lip liner") {
            linkToFetch = `${API_URL}?product_type=lip liner`;
        } else if (type === "lipstick") {
            linkToFetch = `${API_URL}?product_type=lipstick`;
        } else if (type === "mascara") {
            linkToFetch = `${API_URL}?product_type=mascara`;
        } else if (type === "nail polish") {
            linkToFetch = `${API_URL}?product_type=nail polish`;
        } 
        fetch(linkToFetch)
        .then((response) => response.json())
        .then((data) => setProducts(data))
        .catch((err) => console.log(err));

    }, [type]);

    return (
        <div className="wrapper">
        <div className="grid">
            {
                products.map((product) => {
                    return <div key={product.id} className="grid__item">
                        <div className="grid__cart-button"></div>
                        <img className="grid__img" src={product.image_link} alt=""></img>
                        <p className="grid__brand">Brand: {product.brand}</p>
                        <p className="grid__name">{product.name}</p>
                        <p className="grid__price">{product.price} {product.price_sign}</p>
                    </div>
                })
            }
        </div>
        </div>
    )
};

export default Grid;