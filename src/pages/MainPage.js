import Footer from "../sections/footer/Footer"
import Home from "../sections/home/Home"
import Newsletter from "../sections/newsletter/Newsletter"
import ProductTypes from "../sections/product-types/ProductTypes"


const MainPage = () => {
    window.scrollTo(0, 0);

    return(
        <>
            <Home/>
            <ProductTypes/>
            <Newsletter/>
            <Footer/>
        </>
    )
};

export default MainPage;