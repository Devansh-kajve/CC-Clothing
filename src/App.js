import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage.component'
import ShopPage from './components/shop/shop.component';
import Header from './components/Header/Header.component';
import SignInAndSignUpPage from './pages/Sign-in-and-sign-up/Sign-in-and-sign-up.component'
import { auth } from './firebase/firebase.utils'

class App extends React.Component{
  constructor(){
    super();

    this.state = {
      currentUser: null,
    }
  }

unsubscribeFromAuth = null;


componentDidMount(){
  this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
    this.setState({ currentUser: user})
  })
}

componentWillUnmount(){
  this.unsubscribeFromAuth();
}

  render(){
  return (
    //set up the react router
    <div>
      <Header currentUser = {this.state.currentUser}/>
      <Switch>
      <Route exact path='/' component={Homepage} />
      <Route path='/shop' component={ShopPage} />
      <Route path='/signin' component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}
}
export default App;
