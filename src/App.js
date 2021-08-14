import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import ShopPage from './pages/ShopPage';
import './App.scss';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={MainPage}/>
          <Route path="/shop/:cosmetic?" component={ShopPage}/>
        </Switch>
      </Router>
    </div>
  )
}

export default App;
