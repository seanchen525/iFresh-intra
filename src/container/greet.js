import React, {Component} from 'react';
import config from '../../config.json';
import greetStyle from '../css/greet.css';

class Greeter extends Component{
    render(){
        return (
            <h1 className={greetStyle.title}>
                {config.greetText}
            </h1>
        );
    }
}

export default Greeter