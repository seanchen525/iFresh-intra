import React, {Component} from 'react';
import loginStyle from '../css/login.css';

class Login extends Component{
    render(){
        return (
            <div className={loginStyle.login_window}>
                <div className={loginStyle.unit}>
                    <label>Username:</label>
                    <input type="text" id="username" placeholder="Please input your username" />
                </div>
                <div className={loginStyle.unit}>
                    <label>Password:</label>
                    <input type="text" id="password" placeholder="Please input your password" />
                </div>
                <div className={loginStyle.unit}>
                    <button type="button" className={"btn btn-success"}>Login</button>
                    <button type="button" className="btn btn-primary">Sign Up</button>
                </div>
                <div className={loginStyle.unit}>
                    <a className="btn btn-social-icon btn-facebook">
                        <span className="fa fa-facebook"></span>
                    </a>
                    <a className="btn btn-social-icon btn-google">
                        <span className="fa fa-google"></span>
                    </a>
                    <a className="btn btn-social-icon btn-dropbox">
                        <span className="fa fa-dropbox"></span>
                    </a>
                </div>
            </div>
        );
    }
}

export default Login