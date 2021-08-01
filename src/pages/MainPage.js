import Footer from "../sections/footer/Footer"
import Home from "../sections/home/Home"
import Newsletter from "../sections/newsletter/Newsletter"
import ProductTypes from "../sections/product-types/ProductTypes"


const MainPage = () => {
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