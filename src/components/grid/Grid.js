import { useEffect, useState } from 'react';
import './Grid.scss';
import { API_URL, source } from '../../common/helpers';

const Grid = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {

        let linkToFetch = "";
        if (source.fromWhere === "ALL") {
            linkToFetch = API_URL;
        } else if (source.fromWhere === "BRONZER") {
            linkToFetch = `${API_URL}?product_type=bronzer`;
        } else if (source.fromWhere === "BLUSH") {
            linkToFetch = `${API_URL}?product_type=blush`;
        } else if (source.fromWhere === "EYEBROW") {
            linkToFetch = `${API_URL}?product_type=eyebrow`;
        } else if (source.fromWhere === "EYELINER") {
            linkToFetch = `${API_URL}?product_type=eyeliner`;
        } else if (source.fromWhere === "EYESHADOW") {
            linkToFetch = `${API_URL}?product_type=eyeshadow`;
        } else if (source.fromWhere === "FOUNDATION") {
            linkToFetch = `${API_URL}?product_type=foundation`;
        } else if (source.fromWhere === "LIP LINER") {
            linkToFetch = `${API_URL}?product_type=lip liner`;
        } else if (source.fromWhere === "LIPSTICK") {
            linkToFetch = `${API_URL}?product_type=lipstick`;
        } else if (source.fromWhere === "MASCARA") {
            linkToFetch = `${API_URL}?product_type=mascara`;
        } else if (source.fromWhere === "NAIL POLISH") {
            linkToFetch = `${API_URL}?product_type=nail polish`;
        } 

        fetch(linkToFetch)
        .then((response) => response.json())
        .then((data) => setProducts(data))
        .catch((err) => console.log(err));

    }, []);

    return (
        <div className="wrapper">
        <div className="grid">

            {
                products.map((product) => {
                    return <div key={product.id} className="grid__item">
                        <img className="grid__img" src={product.image_link} alt=""></img>
                    </div>
                })
            }
        </div>
        </div>
    )
};

export default Grid;