import ProductInfo from "../components/product-info/ProductInfo";
import Footer from "../sections/footer/Footer";
import Header from "../sections/home/header/Header";

const ProductPage = ({url}) => {
    window.scroll(0, 0);

    return (
        <>
            <Header/>
            <ProductInfo url={url}/>
            <Footer/>
        </>
    )
};

export default ProductPage;