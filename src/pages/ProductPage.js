import { useParams } from "react-router-dom";
import ProductInfo from "../components/product-info/ProductInfo";
import Footer from "../sections/footer/Footer";
import Header from "../sections/home/header/Header";

const ProductPage = () => {
    window.scroll(0, 0);
    let { id } = useParams();

    return (
        <>
            <Header/>
            <ProductInfo id={id}/>
            <Footer/>
        </>
    )
};

export default ProductPage;