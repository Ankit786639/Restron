import React, { Component } from 'react';
import './Banner.css';
import logo from '../image/logo.png'
import {Link} from 'react-router-dom'

// import {Link} from 'react-router-dom';

export default class Banner extends Component {
  
    render(){
      
    return (
        <div>
            <div className="banner">
                <div className="container">
                    <div className="container-fluid logo_div justify-content-center mt-5 p-4">
                        <Link className="navbar-brand animated pulse" to="/">
                            <img src={logo} alt="Logo" className="pogo"/>
                        </Link>
                    </div>  
                </div>
            </div>
        </div>
    )
}
} 

