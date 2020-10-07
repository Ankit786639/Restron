import React, { Component } from 'react';
import axios from 'axios';
import{Modal, Button, Form} from 'react-bootstrap';
import './signUp.css';
import {contactValidation, emailValidation, passwordValidation} from './validation';


export default class signUp extends Component {
    constructor(props){
        super(props);
        this.state={
            name:'', 
            email:'',
            password:'',
            c_password:'',
            ph_number:'',
            invalid_mail:false,
            msg:'password or confirm password is not correct!',
        }
    }

    
    
    handleSubmit = (event) =>{
      
      if(passwordValidation(this.state.password, this.state.c_password)){
        this.setState({password:this.state.password})
      }
   
      const signupDetails = {
        name:this.state.name,
        email:this.state.email,
        password:this.state.password,
        contact:this.state.ph_number,
      }
      axios.post(`http://localhost:8000/api/signup`,signupDetails)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })

    };

    handleName = (event) => {
      this.setState({name:event.target.value});
    }

    handleEmail = (event) => {
      if(emailValidation(event.target.value)){
        this.setState({email:event.target.value});
      } 
    }

    handlePassword = (event) => {
        this.setState({password:event.target.value});
    }

    handleConfirmPassword = (event) => {
        this.setState({c_password:event.target.value});
    }

    handlePhoneNumber = (event) =>{
      if(contactValidation(event.target.value)){
        this.setState({ph_number:event.target.value});
      }
    }
    
    render() {
    return (
        <div> 
                <Modal show={this.props.show} onHide={this.props.onHide} animation={true} centered >
                  <Modal.Header closeButton>
                    <Modal.Title ><h1 className="form_header">Sign Up</h1></Modal.Title>
                  </Modal.Header>
                  {//this.state.success ? <span>successfully created</span> : null
                  } 
                  <Modal.Body>
                    <Form>
                        <input type="text" placeholder="Name" name="name" required className="form_input_field p-3 mb-3" onChange={this.handleName}/>
                        
                        <input type="text" placeholder="Email" name="email" required className="form_input_field p-3 mb-3" onChange={this.handleEmail}/>
                          
                          {this.state.invalid_mail ? <span>'Your Email Id is Invalid !'</span> : null}
                        
                        <input type="password" placeholder="Password" name="password" required className="form_input_field p-3 mb-3" onChange={this.handlePassword}/>
                        
                        <input type="password" placeholder="Confirm Password" name="c_password" required className="form_input_field p-3 mb-3" onChange={this.handleConfirmPassword}/>
                        
                        <input type="text" placeholder="Mobile Number" name="ph_number" required className="form_input_field p-3 mb-3" onChange={this.handlePhoneNumber}/>
                        
                        <Button variant="danger" onClick={this.handleSubmit} className="form_input_field p-3 mb-3">Register</Button>
                        </Form>
                        {//this.state.error ? <span>{this.state.msg}</span> : null
                       }
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="dark" onClick={this.props.onHide}>Close</Button>
                  </Modal.Footer>
                </Modal>
        </div>
            );
          }
        }