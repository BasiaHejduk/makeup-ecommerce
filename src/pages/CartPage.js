import Cart from "../components/cart/cart"
import Footer from "../sections/footer/Footer"
import Header from "../sections/home/header/Header"
import Menu from "../sections/home/menu/Menu"

const CartPage = () => {
    window.scrollTo(0, 0);
    return (
        <>
            <Header/>
            <Menu/>
            <Cart/>
            <Footer/>
        </>
    )
};

export default CartPage;