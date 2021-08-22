import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MobileMenu from '../../../components/mobile-menu/MobileMenu';
import './TopBar.scss';

const TopBar = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
    const productsInCart = useSelector(state => state.cart);

    const toggleMobileMenu = () => {
        setMobileMenu((prevState) => !prevState);
    }

    return (
        <>
        <div className="top-bar">
            <div className="top-bar__left">
                <Link to="/"><div className="top-bar__logo-icon"></div></Link>
                <Link to="/" className="top-bar__logo-text"><p className="top-bar__logo-text">YOUR <br/> MAKEUP</p></Link>
            </div>
            <div className="top-bar__right">
                <div className="top-bar__hamburger" onClick={toggleMobileMenu}>
                    <div className="top-bar__hamburger-item"></div>
                    <div className="top-bar__hamburger-item"></div>
                    <div className="top-bar__hamburger-item"></div>
                </div>
                {/* <div className="top-bar__login"></div> */}
                <Link to="/cart" className="top-bar__link">
                    <div className="top-bar__cart-icon">
                        {productsInCart.length ? <div className="top-bar__cart-number">{productsInCart.length}</div> : <></>}
                    </div>
                </Link>
            </div>
        </div>
        {mobileMenu ? <MobileMenu toggleMobileMenu={toggleMobileMenu}/> : null}
        </>
    )
};

export default TopBar;