import { useEffect, useState } from 'react';
import './Fetch.scss';
import { API_URL } from '../../common/helpers';
import {brands} from '../../common/Brands';
// import Pagination from '../pagination/Pagination';

const Fetch = ({type}) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [brand, setBrand] = useState("");
    // const [currentPage, setCurrentPage]  = useState(1);
    // const [productsPerPage] = useState(20);

    useEffect(() => {

        const fetchProducts = async () => {
            setLoading(true);
            let linkToFetch = "";
            if (type === "all" ) {
                linkToFetch = `${API_URL}?brand=${brand}`;
            } else if (type === "bronzer") {
                linkToFetch = `${API_URL}?brand=${brand}&product_type=bronzer`;
            } else if (type === "blush") {
                linkToFetch = `${API_URL}?brand=${brand}&product_type=blush`;
            } else if (type === "eyebrow") {
                linkToFetch = `${API_URL}?brand=${brand}&product_type=eyebrow`;
            } else if (type === "eyeliner") {
                linkToFetch = `${API_URL}?brand=${brand}&product_type=eyeliner`;
            } else if (type === "eyeshadow") {
                linkToFetch = `${API_URL}?brand=${brand}&product_type=eyeshadow`;
            } else if (type === "foundation") {
                linkToFetch = `${API_URL}?brand=${brand}&product_type=foundation`;
            } else if (type === "lip liner") {
                linkToFetch = `${API_URL}?brand=${brand}&product_type=lip liner`;
            } else if (type === "lipstick") {
                linkToFetch = `${API_URL}?brand=${brand}&product_type=lipstick`;
            } else if (type === "mascara") {
                linkToFetch = `${API_URL}?brand=${brand}&product_type=mascara`;
            } else if (type === "nail polish") {
                linkToFetch = `${API_URL}?brand=${brand}&product_type=nail polish`;
            } 
            await fetch(linkToFetch)
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((err) => console.log(err));
            setLoading(false);
        };

        fetchProducts();

    }, [type, brand]);

    // const indexOfLastProduct = currentPage * productsPerPage;
    // const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    // const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
    // const paginate = (pageNumber) => setCurrentPage(pageNumber);

    let elementToRender;

    if (loading) {
        elementToRender = <div className="fetch__loading">Loading data...</div>
    } 
    if (products.length === 0 && !loading) {
        elementToRender = (
            <div className="wrapper">
                <div className="fetch__loading">NO PRODUCTS</div>
                <p className="fetch__paragraph">SELECT BRAND:</p>
                <select className="fetch__select" name="brands"
                        value={brand} onChange={e=> setBrand(e.target.value)}>
                    <option value="">all brands</option>
                    {brands.map((brand) => {
                        return <option key={brand.id} value={brand.name}>{brand.name}</option>
                    })}
                </select>
            </div>        
        )
    }
    if (products.length > 0 && !loading) {
        elementToRender = (
            <div className="wrapper">
                <p className="fetch__paragraph">SELECT BRAND:</p>
                <select className="fetch__select" name="brands"
                        value={brand} onChange={e=> setBrand(e.target.value)}>
                    <option value="">all brands</option>
                    {brands.map((brand) => {
                        return <option key={brand.id} value={brand.name}>{brand.name}</option>
                    })}
                </select>
                <div className="fetch">
                    {
                        products.map((product) => {
                            return <div key={product.id} className="fetch__item">
                                <button className="fetch__cart-button"></button>
                                <img className="fetch__img" src={product.image_link} alt=""></img>
                                <p className="fetch__brand">Brand: {product.brand}</p>
                                <p className="fetch__name">{product.name}</p>
                                <p className="fetch__price">{product.price} {product.price_sign}</p>
                            </div>
                        })
                    }
                </div>
                {/* <Pagination productsPerPage={productsPerPage} totalProducts={products.length} paginate={paginate}/> */}
            </div>
        )
    }

    return elementToRender;
};

export default Fetch;