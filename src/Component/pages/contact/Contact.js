import React, {Component} from 'react';
import "./Contact.css";
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


class Contact extends Component {
    
    render() {
        
        return(
            <div className="py-5 contact">
                <div className="text-center py-4">
                    <h3>Contact</h3>
                    <img src="flower.png"/>
                </div>
                <div className="frm">
                <form className="form-signin w-50">
                    <div className="form-group">
                       
                        <input type="text" className="form-control py-4" id="usr" placeholder="Name"/>
                        </div>
                        <div className="form-group">
                       
                        <input type="email" class="form-control py-4" id="email" placeholder="Email"/>
                        <div className="my-3">
                            <textarea className="form-control py-4" rows="5" id="comment" placeholder="Your message..."></textarea>
                        </div>
                        
                    </div>
                   <div>
                        <button className="btn btn-lg  btn-block" type="submit">Submit</button>
                   </div>
                </form>
                </div>
            </div>
        );
    }
}
export default Contact;


