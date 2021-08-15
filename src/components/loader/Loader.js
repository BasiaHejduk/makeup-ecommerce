import './Loader.scss';

const Loader = () => {
    return (
        <div className="loader__wrapper">
            <div className="loader">
                <div className="loader__line loader__line--1"></div>
                <div className="loader__line loader__line--2"></div>
                <div className="loader__line loader__line--3"></div>
            </div>
        </div>
    )
};

export default Loader;