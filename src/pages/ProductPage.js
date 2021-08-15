import ProductInfo from "../components/product-info/ProductInfo";
import Footer from "../sections/footer/Footer";
import Header from "../sections/home/header/Header";

const ProductPage = () => {
    window.scroll(0, 0);

    return (
        <>
            <Header/>
            <ProductInfo/>
            <Footer/>
        </>
    )
};

export default ProductPage;