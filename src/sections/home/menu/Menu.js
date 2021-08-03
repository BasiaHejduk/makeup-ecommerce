import { Link } from 'react-router-dom';
import './Menu.scss';

const Menu = () => {

    return (
        <div className="menu wrapper">
            <ul className="menu__list">
                <Link className="menu__item" to="/shop/all"><li className="menu__item">ALL</li></Link>
                <Link className="menu__item" to="/shop/bronzer"><li className="menu__item">BRONZER</li></Link>
                <Link className="menu__item" to="/shop/blush"><li className="menu__item">BLUSH</li></Link>
                <Link className="menu__item" to="/shop/eyebrow"><li className="menu__item">EYEBROW</li></Link>
                <Link className="menu__item" to="/shop/eyeliner"><li className="menu__item">EYELINER</li></Link>
                <Link className="menu__item" to="/shop/eyeshadow"><li className="menu__item">EYESHADOW</li></Link>
                <Link className="menu__item" to="/shop/foundation"><li className="menu__item">FOUNDATION</li></Link>
                <Link className="menu__item" to="/shop/lip liner"><li className="menu__item">LIP LINER</li></Link>
                <Link className="menu__item" to="/shop/lipstick"><li className="menu__item">LIPSTICK</li></Link>
                <Link className="menu__item" to="/shop/mascara"><li className="menu__item">MASCARA</li></Link>
                <Link className="menu__item" to="/shop/nail polish"><li className="menu__item">NAIL POLISH</li></Link>
            </ul>
        </div>
    )
};

export default Menu;