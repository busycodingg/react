import React, {Component} from 'react';
import "./Skill.css";
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
    width: '70%'
};

var styles1 = {
    width: '100%'
};
var styles2 = {
    width: '100%'
};
var styles3 = {
    width: '75%'
};
var styles4 = {
    width: '80%'
};
var styles5 = {
    width: '70%'
};
var styles6 = {
    width: '50%'
};
var styles7 = {
    width: '70%'
};
var styles8 = {
    width: '80%'
};
var styles9 = {
    width: '50%'
};
class Skill extends Component {
    
    render() {
        
        return(
            <div className="skill">
                <div className="py-5 text-center">
                    <h3 className="">Skill</h3>
                    <img src="flower.png"/>
                </div>

            <div className="con mx-5 py-4">
                <div className="pro-block">
                    <div>
                        <h4>Development</h4> 
                        <div className="progress pro">
                            <div className="progress-bar" style={styles}>70%</div>
                        </div>
                        <h4>Html</h4> 
                        <div className="progress pro">
                            <div className="progress-bar" style={styles1}>100%</div>
                        </div>
                        <h4>Css</h4> 
                        <div className="progress pro">
                            <div className="progress-bar" style={styles2}>100%</div>
                        </div>
                        <h4>Jquery</h4> 
                        <div className="progress pro">
                            <div className="progress-bar" style={styles3}>75%</div>
                        </div>
                        <h4>Bootstrap</h4> 
                        <div className="progress pro">
                            <div className="progress-bar" style={styles4}>80%</div>
                        </div>
                    </div>
                    <div>
                        <h4>React</h4> 
                        <div className="progress pro">
                            <div className="progress-bar" style={styles5}>70%</div>
                        </div>
                        <h4>AngularJs</h4> 
                        <div className="progress pro">
                            <div className="progress-bar" style={styles6}>50%</div>
                        </div>
                        <h4>Javascript</h4> 
                        <div className="progress pro">
                            <div className="progress-bar" style={styles7}>70%</div>
                        </div>
                        <h4>NodeJs</h4> 
                        <div className="progress pro">
                            <div className="progress-bar" style={styles8}>80%</div>
                        </div>
                        <h4>Python</h4> 
                        <div className="progress pro">
                            <div className="progress-bar" style={styles9}>50%</div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Skill;
