import React, {Component} from 'react';
import "./homePages.css";
import { Link } from 'react-router-dom';
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

const ROOT_CSS = css({
    height: 200,
    width: 200
  });
  var styles = {
      color: '#ffffff'
  } 
class Homepage extends Component {
    
    render() {
        
        return(
            <div className="text-center container-2">
               <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true} className="fadeIn" animationInDelay="20s">
               <div clasName="container-2-1" style={styles}>
                    <h4 className="fadeInLeft">Hello & Welcome</h4>
                </div>
                </Animated>
                <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
                <div className="container-2-2">
                    <h1>I Am  <b>A Developer</b></h1>
                </div>
                </Animated>
                <div className="my-4 icons">
                    <Link to=""><FontAwesomeIcon icon={['fab', 'facebook']} className="cont mx-2 face" size="lg"/></Link>
                    <Link to=""><FontAwesomeIcon icon={['fab', 'linkedin']} className="cont  mx-2 linked" size="lg"/></Link>
                    <Link to=""><FontAwesomeIcon icon={['fab', 'google']}  className="cont  mx-2 google" size="lg" /></Link>
                    <Link to=""><FontAwesomeIcon icon={['fab', 'twitter']}  className="cont  mx-2 twitter" size="lg"/></Link>
                    <Link to=""><FontAwesomeIcon icon={['fab', 'git']}  className="cont  mx-2 git" size="lg"/></Link>
                    <Link to="">  <FontAwesomeIcon icon={['fab', 'slack']}  className="cont  mx-2 slack" size="lg"/></Link>
                </div>
                
                
                <ScrollTop
                text="top"
                distance={100}
                breakpoint={768}
                style={{ backgroundColor: "hotpink", borderRadius: '100rem', padding: "10px", borderColor: 'hotpink' , outline: 'none'}}
                className="scroll-your-role"
                speed={1000}
                target={20}
                />
               
            </div>
        );
    }
}
export default Homepage;


