import React, {Component} from 'react';
import "./Service.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faGoogle, faGooglePlus } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ScrollAnimation from 'react-animate-on-scroll';
import {Animated} from "react-animated-css";
import ScrollTop from "react-scrolltop-button";
import { css } from 'glamor';
import ScrollToBottom from 'react-scroll-to-bottom';

library.add(fab, faCheckSquare, faCoffee,)
var styles = {
    fontSize: '30px'
}
class Service extends Component {
    
    render() {
        
        return(
           <div className="text-center jumbotron cov">
               <div className="py-5">
                    <h3>Services</h3>
                    <img src="flower.png"/>
               </div>
               <div className="d-flex w-100 dflex py-5">
             
               <div className="card w-25 py-3">
                    {/* <img src="comp.png" className="card-img-top" alt="Card image"/> */}
                    <i className="fa fa-desktop" style={styles}></i>
                    <div className="card-body">
                        <h4 className="card-title">Web Developmemnt</h4>
                        <p className="card-text">Some example text.</p>
                    </div>
               
                </div>
                <div className="card  w-25 py-3" >
                    {/* <img src="mon.jpg" className="card-img-top" alt="Card image"/> */}
                    <i className="fa fa-desktop" style={styles}></i>
                    <div className="card-body">
                        <h4 className="card-title">Graphics Design</h4>
                        <p className="card-text">Some example text.</p>
                    </div>
                </div> 
                <div className="card  w-25 py-3" >
                    {/* <img src="digital.png" className="card-img-top" alt="Card image"/> */}
                    <i className="fa fa-bullhorn" style={styles}></i>
                   
                    <div className="card-body">
                        <h4 className="card-title">Digital Marketing</h4>
                        <p className="card-text">Some example text.</p>
                    </div>
               </div>
               </div>
                
               
           </div>
        );
    }
}
export default Service;


