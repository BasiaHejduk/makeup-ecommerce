import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import ShopPage from './pages/ShopPage';
import './App.scss';
import ProductPage from './pages/ProductPage';
import UnderConstructionPage from './pages/UnderConstructionPage';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={MainPage}/>
          <Route path="/shop/:type?" component={ShopPage}/>
          <Route path="/product/:id?" component={ProductPage}/>
          <Route path="/under-construction" component={UnderConstructionPage}/>
        </Switch>
      </Router>
    </div>
  )
}

export default App;
