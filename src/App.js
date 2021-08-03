import './App.scss';
import MainPage from './pages/MainPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ShopPage from './pages/ShopPage';

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
