import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Shop from './components/Shop';
import ItemDetails from './components/ItemDetails';
import Parent from './components/Parent';
import CustomHookUserForm from './components/CustomHookUserForm';
import Axios from './components/Axios';

function App() {
  return (
    <Router>
      <div className='App '>
        <Nav />
        <div className='container'>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/about' component={About} />
            <Route path='/shop' exact component={Shop} />
            <Route path='/shop/:id' component={ItemDetails} />
          </Switch>
          <Route path='/child' component={Parent} />
          <Route path='/customhook' exact component={CustomHookUserForm} />
          <Route path='/axios' exact component={Axios} />
        </div>
      </div>
    </Router>
  );
}

export default App;
