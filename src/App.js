import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage.component'

const hats = () => (
  <div>
    <h1>Hats page</h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
      <Route exact path='/' component={Homepage} />
      <Route path='/Hats' component={hats} />
      </Switch>
    </div>
  );
}

export default App;
