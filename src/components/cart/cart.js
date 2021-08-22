import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromCart } from '../../store';
import ShopTitle from '../shop-title/ShopTitle';
import './cart.scss';

const Cart = () => {
    const productsInCart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const handleRemoveProduct = (id) => {
        dispatch(removeFromCart({ id: id }));
    }

    return (
        <div className="wrapper">
            <div className="cart">
                {productsInCart.length ? (
                    <>
                        <ul className="cart__list">
                        {
                            productsInCart.map((product) => {
                                return (
                                    <li className="cart__item" key={product.id}>
                                        <div className="cart__item-img-wrapper">
                                            <img className="cart__item-img" src={product.img} alt=""></img>
                                        </div>
                                        <div className="cart__item-info">
                                            <p className="cart__item-brand">{product.brand}</p>
                                            <p className="cart__item-name">{product.name}</p>
                                        </div>
                                        <div className="cart__item-price">{product.price}</div>
                                        <button className="cart__button-remove" 
                                                onClick={()=> handleRemoveProduct(product.id)}>X
                                        </button>
                                    </li>
                            )})  
                        }     
                        </ul>
                        <div className="cart__buttons-wrapper">
                            <Link to="/under-construction">
                                <button className="cart__button cart__button--checkout">GO TO CHECKOUT</button>
                            </Link>
                            <Link to="/shop/all">
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