import './TopBar.scss';

const TopBar = () => {
    return (
        <div className="top-bar">
            <div className="top-bar__left">
                <div className="top-bar__logo-icon"></div>
                <p className="top-bar__logo-text">YOUR <br/> MAKEUP</p>
            </div>
            <div className="top-bar__hamburger">
                    <div className="top-bar__hamburger-item"></div>
                    <div className="top-bar__hamburger-item"></div>
                    <div className="top-bar__hamburger-item"></div>
                </div>
            <div className="top-bar__right">
                <div className="top-bar__login"></div>
                <div className="top-bar__cart-icon"></div>
            </div>
        </div>
    )
};

export default TopBar;