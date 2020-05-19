import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import App from '../App';
import About from './About';
import Employments from './Components/Employments';
import Projects from './Components/Projects';
import Contacts from './Components/Contacts';
import Footer from './Components/Footer';

const Navbar = () => {
  return (
    <Router>

      <div>

        <ul>

          <li>
            <Link to='/'>Home</Link> 
          </li>

          <li>
            <Link to='/about'>About</Link> 
          </li>

          <li>
            <Link to='/employments'>Employments</Link> 
          </li>

          <li>
            <Link to='/projects'>Projects</Link> 
          </li>

          <li>
            <Link to='/contacts'>Contacts</Link> 
          </li>

          <li>
            <Link to='/footer'>Footer</Link> 
          </li>

        </ul>

        <Switch>

          <Route exact path='/'>
            <App />
          </Route>

          <Route path='/about'>
           <About name="Anthony Edward Stark"/>
          </Route>

          <Route path='/employments'>
           <Employments jobtitle="CEO Stark Industries"/>
          </Route>

          <Route path='/projects'>
           <Projects title="Proton Cannon"/>
          </Route>

          <Route path='/contacts'>
           <Contacts email="rockymmpr@gmail.com"/>
          </Route>

          <Route path='/footer'>
           <Footer />
          </Route>

        </Switch>

      </div>

    </Router>
  );
}

export default Navbar;

// npm install react-router-dom