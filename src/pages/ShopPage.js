import { source } from "../common/helpers";
import Grid from "../components/grid/Grid"
import ShopTitle from "../components/shop-title/ShopTitle";
import Header from "../sections/home/header/Header"


const ShopPage = ({type}) => {
    return (
        <>
            <Header/>
            <ShopTitle title={source.fromWhere}/>
            <Grid/>
        </>
    )
};

export default ShopPage;