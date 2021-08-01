import './App.scss';
import Footer from './sections/footer/Footer';
import Home from './sections/home/Home';
import Newsletter from './sections/newsletter/Newsletter';
import ProductTypes from './sections/product-types/ProductTypes';

const App = () => {
  return (
    <div className="App">
      <Home/>
      <ProductTypes/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default App;
