import { Link } from 'react-router-dom';
import './MobileMenu.scss';

const MobileMenu = ({toggleMobileMenu}) => {
    return (
        <div className="mobile-menu">
            <ul className="mobile-menu__list">
                <Link className="mobile-menu__item" to="/shop/all" onClick={toggleMobileMenu}>
                    <li className="mobile-menu__item">ALL</li>
                </Link>
                <Link className="mobile-menu__item" to="/shop/bronzer" onClick={toggleMobileMenu}>
                    <li className="mobile-menu__item">BRONZER</li>
                </Link>
                <Link className="mobile-menu__item" to="/shop/blush" onClick={toggleMobileMenu}>
                    <li className="mobile-menu__item">BLUSH</li>
                </Link>
                <Link className="mobile-menu__item" to="/shop/eyebrow" onClick={toggleMobileMenu}>
                    <li className="mobile-menu__item">EYEBROW</li>
                </Link>
                <Link className="mobile-menu__item" to="/shop/eyeliner" onClick={toggleMobileMenu}>
                    <li className="mobile-menu__item">EYELINER</li>
                </Link>
                <Link className="mobile-menu__item" to="/shop/eyeshadow" onClick={toggleMobileMenu}>
                    <li className="mobile-menu__item">EYESHADOW</li>
                </Link>
                <Link className="mobile-menu__item" to="/shop/foundation" onClick={toggleMobileMenu}>
                    <li className="mobile-menu__item">FOUNDATION</li>
                </Link>
                <Link className="mobile-menu__item" to="/shop/lip liner" onClick={toggleMobileMenu}>
                    <li className="mobile-menu__item">LIP LINER</li>
                </Link>
                <Link className="mobile-menu__item" to="/shop/lipstick" onClick={toggleMobileMenu}>
                    <li className="mobile-menu__item">LIPSTICK</li>
                </Link>
                <Link className="mobile-menu__item" to="/shop/mascara" onClick={toggleMobileMenu}>
                    <li className="mobile-menu__item">MASCARA</li>
                </Link>
                <Link className="mobile-menu__item" to="/shop/nail polish" onClick={toggleMobileMenu}>
                    <li className="mobile-menu__item">NAIL POLISH</li>
                </Link>
            </ul>
        </div>
    )
};

export default MobileMenu