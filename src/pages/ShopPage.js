import Grid from "../components/grid/Grid"
import ShopTitle from "../components/shop-title/ShopTitle";
import Header from "../sections/home/header/Header"
import { useParams } from "react-router-dom";

const ShopPage = () => {
    window.scrollTo(0, 0);
    let { cosmetic } = useParams();
    return (
        <>
            <Header/>
            <ShopTitle title={cosmetic}/>
            <Grid type={cosmetic}/>
        </>
    )
};

export default ShopPage;