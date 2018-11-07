import React, {Component} from 'react';
import './About.css';

class About extends Component {
    render() {
        return(
            <div className="body py-5">
                <div className="text-center">
                <div>
                    <h3>About Me</h3>
                    <img src="flower.png"/>
                    <h4 className="my-5 grey">I am a Frontend Developer, i develop cool <br/>websites that suite your taste</h4>
                </div>
                <div className="my-5 py-5">
                    <h3 className="type">Grace</h3>
                    <h3 className="my-3 grey">Hello! <b>I'm Amoko Grace.</b></h3>
                    <ul>
                        <li className="mx-2 grey">Frontend Developer</li>
                        <li className="mx-2 grey">Software developer</li>
                        <li className="mx-2 grey">Graphics Designer</li>
                    </ul>
                </div>

            </div>
              
            </div>
        );
    }
}
export default About;