import Fetch from "../components/fetch/Fetch"
import ShopTitle from "../components/shop-title/ShopTitle";
import Header from "../sections/home/header/Header"
import { useParams } from "react-router-dom";
import Footer from "../sections/footer/Footer";

const ShopPage = () => {
    window.scrollTo(0, 0);
    let { cosmetic } = useParams();

    return (
        <>
            <Header/>
            <ShopTitle title={cosmetic}/>
            <Fetch type={cosmetic}/>
            <Footer/>
        </>
    )
};

export default ShopPage;