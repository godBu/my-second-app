import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home'
import About from './Components/About';
import Employments from './Components/Employments';
import Projects from './Components/Projects';
import Contacts from './Components/Contacts';
import Footer from './Components/Footer';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar /> {/*Navbar goes on top*/}

        <Switch>
          <Route exact path='/'> {/*Switch in the middle*/}
            <Home />
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
        </Switch>

           <Footer /> {/**Footer goes at the bottom*/}
      </div>
      </BrowserRouter>
    );
  }
}

export default App;

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/
