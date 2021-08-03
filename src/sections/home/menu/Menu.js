import { Link } from 'react-router-dom';
import './Menu.scss';
import { source } from '../../../common/helpers';

const Menu = () => {

    const handleClickMenu = (e) => {
        source.fromWhere = e.target.innerText;
    };

    return (
        <div className="menu wrapper">
            <ul className="menu__list">
                <Link className="menu__item" to="/shop">
                    <li className="menu__item" onClick={(e)=> handleClickMenu(e)}>ALL</li>
                </Link>
                <Link className="menu__item" to="/shop">
                    <li className="menu__item" onClick={(e)=> handleClickMenu(e)}>BRONZER</li>
                </Link>
                <Link className="menu__item" to="/shop">
                    <li className="menu__item" onClick={(e)=> handleClickMenu(e)}>BLUSH</li>
                </Link>
                <Link className="menu__item" to="/shop">
                    <li className="menu__item" onClick={(e)=> handleClickMenu(e)}>EYEBROW</li>
                </Link>
                <Link className="menu__item" to="/shop">
                    <li className="menu__item" onClick={(e)=> handleClickMenu(e)}>EYELINER</li>
                </Link>
                <Link className="menu__item" to="/shop">
                    <li className="menu__item" onClick={(e)=> handleClickMenu(e)}>EYESHADOW</li>
                </Link>
                <Link className="menu__item" to="/shop">
                    <li className="menu__item" onClick={(e)=> handleClickMenu(e)}>FOUNDATION</li>
                </Link>
                <Link className="menu__item" to="/shop">
                    <li className="menu__item" onClick={(e)=> handleClickMenu(e)}>LIP LINER</li>
                </Link>
                <Link className="menu__item" to="/shop">
                    <li className="menu__item" onClick={(e)=> handleClickMenu(e)}>LIPSTICK</li>
                </Link>
                <Link className="menu__item" to="/shop">
                    <li className="menu__item" onClick={(e)=> handleClickMenu(e)}>MASCARA</li>
                </Link>
                <Link className="menu__item" to="/shop">
                    <li className="menu__item" onClick={(e)=> handleClickMenu(e)}>NAIL POLISH</li>
                </Link>
            </ul>
        </div>
    )
};

export default Menu;