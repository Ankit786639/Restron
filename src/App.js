import React from 'react';
import Menu from './other/Menu';
import About from './other/About';
import Team from './other/Team';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home/home';
import ourStory from './other/ourStory';
import Contact from './other/contact';
import Signup from './other/signUp';
import Food from './other/food';
import cart from './other/cart';
import Checkout from './other/checkout';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/menu" component={Menu}/>
          <Route path="/team" component={Team}/>
          <Route path="/ourstory" component={ourStory}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/signUp" component={Signup}/>
          <Route path="/food" component={Food}/>
          <Route path="/cart" component={cart}/>
          <Route path="/checkout" component={Checkout}/>
          <Route path="www.facebook.com"/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
