import './Loader.scss';

const Loader = () => {
    return (
        <div class="loader__wrapper">
            <div class="loader">
                <div class="loader__line loader__line--1"></div>
                <div class="loader__line loader__line--2"></div>
                <div class="loader__line loader__line--3"></div>
            </div>
        </div>
    )
};

export default Loader;