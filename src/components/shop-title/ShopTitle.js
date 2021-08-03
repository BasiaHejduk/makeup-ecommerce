import './ShopTitle.scss';

const ShopTitle = ({title}) => {
    return (
        <div className="shop-title wrapper">
            <div className="shop-title__background">
                <p className="shop-title__text">{title}</p>
            </div>
        </div>
    )
};

export default ShopTitle;