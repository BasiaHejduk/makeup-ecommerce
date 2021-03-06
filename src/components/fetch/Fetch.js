import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { API_URL } from '../../common/helpers';
import {brands} from '../../common/Brands';
import ScrollUpButton from '../scroll-up-button/ScrollUpButton';
import Loader from '../loader/Loader';
import { addToCart } from '../../store';
import './Fetch.scss';
import Modal from '../modal/Modal';


const Fetch = ({type}) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [brand, setBrand] = useState("");
    const [modal, setModal] = useState(false);
    const [modalImg, setModalImg] = useState("");
    const dispatch = useDispatch();

    const handleAddProduct = (id, img, brand, name, price) => {
        dispatch(addToCart({ id, img, brand, name, price}));
        setModal(true);
        setModalImg(img);
    };

    const closeModal = () => {
        setModal(false);
    };

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

    let elementToRender;

    if (loading) {
        elementToRender = <Loader/>
    } 
    if (products.length === 0 && !loading) {
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
                <div className="fetch__no-products">NO PRODUCTS</div>
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
                            return (
                                        <div className="fetch__item" key={product.id}>
                                            <button 
                                                className="fetch__cart-button" 
                                                onClick={()=> handleAddProduct(product.id, product.image_link, product.brand, product.name, product.price)}>
                                            </button>
                                            <Link to={`/product/${product.id}`} className="fetch__link">
                                                <div className="fetch__img-wrapper">
                                                    <img className="fetch__img" src={product.image_link} alt=""></img>
                                                </div>
                                                <p className="fetch__brand">Brand: {product.brand}</p>
                                                <p className="fetch__name">{product.name}</p>
                                                <p className="fetch__price">{product.price} $</p>
                                            </Link>
                                        </div>
                            )
                        })
                    }
                </div>
                <ScrollUpButton/>
                {modal ? <Modal closeModal={closeModal} modalImg={modalImg}/> : null}
            </div>
        )
    }

    return elementToRender;
};

export default Fetch;