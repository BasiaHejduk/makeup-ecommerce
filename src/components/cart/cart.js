import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromCart } from '../../store';
import ShopTitle from '../shop-title/ShopTitle';
import './cart.scss';

const Cart = () => {
    const productsInCart = useSelector(state => state.cart);
    const [valueSum, setValueSum] = useState(0);
    const dispatch = useDispatch();

    const handleRemoveProduct = (key) => {
        dispatch(removeFromCart({ key: key }));
    }

    useEffect(() => {
        let pricesArr =[];
        productsInCart.map((product) => {
            pricesArr.push(parseFloat(product.price))
        });
        let sum = 0;
        pricesArr.forEach(function(item, i) {
            sum += item;
        });
        setValueSum(sum);
    }, [productsInCart])

    return (
        <div className="wrapper">
            <div className="cart">
                {productsInCart.length ? (
                    <>
                        <ul className="cart__list">
                        {
                            productsInCart.map((product) => {
                                return (
                                    <li className="cart__item" key={product.key}>
                                        <div className="cart__item-img-wrapper">
                                            <img className="cart__item-img" src={product.img} alt=""></img>
                                        </div>
                                        <Link to={`/product/${product.id}`} className="link">
                                            <div className="cart__item-info">
                                                <p className="cart__item-brand">{product.brand}</p>
                                                <p className="cart__item-name">{product.name}</p>
                                            </div>
                                        </Link>
                                        <div className="cart__item-price">{product.price} $</div>
                                        <button className="cart__button-remove" 
                                                onClick={()=> handleRemoveProduct(product.key)}>X
                                        </button>
                                    </li>
                            )})  
                        }     
                            <li className="cart__item cart__item--summary">
                                <div className="cart__value-info">TOTAL VALUE OF THE PRODUCTS</div>
                                <div className="cart__value-sum">{valueSum} $</div>
                            </li>
                        </ul>
                        <div className="cart__buttons-wrapper">
                            <Link to="/under-construction">
                                <button className="cart__button cart__button--checkout">GO TO CHECKOUT</button>
                            </Link>
                            <Link to="/">
                                <button className="cart__button cart__button--shop">CONTINUE SHOPPING</button>
                            </Link>
                        </div>
                    </>   
                    ) : <ShopTitle className="cart__no-products" title="NO PRODUCTS IN THE CART"/>}
            </div>
        </div>
    )
};

export default Cart;