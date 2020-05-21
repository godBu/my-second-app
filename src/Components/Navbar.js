import React from 'react';
//import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
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
      </div>
  );
}

export default Navbar;

// npm install react-router-dom