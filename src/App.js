import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage.component'
import ShopPage from './components/shop/shop.component';
import Header from './components/Header/Header.component';


function App() {
  return (
    //set up the react router
    <div>
      <Header />
      <Switch>
      <Route exact path='/' component={Homepage} />
      <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
