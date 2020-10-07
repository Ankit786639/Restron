import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Login from '../other/login';
import Signup from '../other/signUp';
import '../css/bootstrap.css';
import '../css/main.css';
import '../css/animate.css';
import './Header.css';

export default class Header extends Component {
    constructor(props){
        super(props);
        this.state={
          showLogin:false,
          show:false,
          toggler:false,
          crr:'',
        };
      };
    
    // facebook = () => {
    //     alert()
    //     const url = "https://www.facebook.com/";
    //     window.location.href = url
    // }

    loginFormClose = ()=>{
        this.setState({showLogin:false});
    }
    
    handleClose = () =>{
        this.setState({show:false});
       console.log(this.state.crr);
       
    }
    
    getProps = (brr) => {
        this.setState({crr:brr});
    }

    handleToggler = () => {
        this.setState({toggler:!this.state.toggler});
    }

    
    

    render(){
        return (
            <section>
                <header>
                    <nav className="navbar navbar-expand-lg navbar-light backgr fixed-top">
                        <div className="col-1 text-center dflex">
                            <button className="px-2 py-1 tog" onClick={this.handleToggler}>
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>    
                        
                            <h2 className="ml-2">
                                <Link className="navbar-brand animated pulse" to="/">
                                    Restron 
                                </Link>
                            </h2>
                         
                            <div className="col-sm-3">
                                {this.state.toggler ?
                                <ul className="navbar-nav">
                                    <li className="nav-item col-3">
                                        <Link className="nav-link" to="/">Home <span className="sr-only"></span></Link>
                                    </li>                           
                                    
                                    <li className="nav-item col-3">
                                        <Link className="nav-link" to="/about">About</Link>
                                    </li>
                                    
                                    <li className="nav-item col-3">
                                        <Link className="nav-link" to="/contact">Contact</Link>
                                    </li>
                                
                                    <li className="nav-item col-3">
                                        <Link className="nav-link" to="/team">Team</Link>
                                    </li>
                                </ul>
                                : null }        
                            </div>
                        <div className="">
                            <Link className="" to="/menu">
                                <button className="header_button_orderFood ml-5">
                                    Order Food
                                </button>
                            </Link>

                            <Link className="" to="/cart">
                                <button className="header_button_orderFood ml-5">
                                    Cart
                                </button>
                            </Link>
                                    
                            <button onClick={()=>{this.setState({showLogin:true})}} className="header_button ml-5">
                                <span>Login</span>
                            </button>

                            <button onClick={()=>{this.setState({show:true})}} className="header_button ml-5">Create Account</button>
                        </div>
                        <div className="ml-auto">  
                            <span><h5>{this.state.crr}<i class="fa fa-user" aria-hidden="true"></i></h5></span>
                        </div> 
                        <Login getProps={(brr) => this.getProps(brr)} value={this.state.crr} show={this.state.showLogin} onHide={this.loginFormClose}/>    
                        <Signup show={this.state.show} onHide={this.handleClose}/>    
                    </nav>
                </header>
            </section>

        )
    }   
}
