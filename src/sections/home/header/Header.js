import Menu from '../menu/Menu';
import TopBar from '../top-bar/TopBar';
import './Header.scss';

const Header = () => {
    return (
        <div className="wrapper">
            <div className="header wrapper">
                <TopBar/>
                <Menu/>
            </div>
        </div>
    )
}

export default Header;