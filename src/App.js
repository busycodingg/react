import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Header from "./Component/headerComponent/header";
import About from "./Component/pages/about/About";
import Homepage from './Component/pages/home/homePages';
import Skill from './Component/pages/skills/Skill';
import Service from "./Component/pages/service/Service";
import Contact from './Component/pages/contact/Contact';
import Footer from './Component/footerComponent/footer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { dom } from '@fortawesome/fontawesome-svg-core'
 
// dom.watch()
 
library.add(fab, faCheckSquare, faCoffee);
var styles = 
  {
    overflow: 'hidden'
  }

class App extends Component {
  render() {
    return (
      <div className="App" style={styles}>
        <Header/>
        <Route path='/'  exact component={Homepage}/>
        <Route path='/about'  exact component={About}/>
        <Route path='/skill'  exact component={Skill}/>
        <Route path='/service'  exact component={Service}/>
        <Route path='/contact'  exact component={Contact}/>
        {/* <Route path='/footer'  exact component={Footer}/> */}
        {/* <Homepage/>
        <About/>
        <Skill/>
        <Service/>
        <Contact/>  */}
        <Footer/>
       
      </div>
    );
  }
}

export default App;
