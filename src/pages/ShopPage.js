import { useParams } from "react-router-dom";
import Fetch from "../components/fetch/Fetch"
import ShopTitle from "../components/shop-title/ShopTitle";
import Header from "../sections/home/header/Header"
import Footer from "../sections/footer/Footer";

const ShopPage = () => {
    window.scrollTo(0, 0);
    let { type } = useParams();

    return (
        <>
            <Header/>
            <ShopTitle title={type}/>
            <Fetch type={type}/>
            <Footer/>
        </>
    )
};

export default ShopPage;