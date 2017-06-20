import React from 'react';
import ReactDOM from 'react-dom';
import Bootstrap from '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/bootstrap-social/assets/css/font-awesome.css';
import '../../node_modules/bootstrap-social/bootstrap-social.css';
import Login from '../container/login.js';
import '../css/base.css';

ReactDOM.render(
    <Login />, document.getElementById('root')
);