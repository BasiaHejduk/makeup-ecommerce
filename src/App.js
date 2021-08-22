import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/index';
import MainPage from './pages/MainPage';
import ShopPage from './pages/ShopPage';
import ProductPage from './pages/ProductPage';
import UnderConstructionPage from './pages/UnderConstructionPage';
import CartPage from './pages/CartPage';
import './App.scss';


const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/" exact component={MainPage}/>
            <Route path="/shop/:type?" component={ShopPage}/>
            <Route path="/product/:id?" component={ProductPage}/>
            <Route path="/cart" component={CartPage}/>
            <Route path="/under-construction" component={UnderConstructionPage}/>
          </Switch>
        </Router>
      </Provider>
    </div>
  )
}

export default App;
