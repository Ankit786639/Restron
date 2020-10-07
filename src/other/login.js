import React,{Component} from 'react'
import{Modal, Button, Form} from 'react-bootstrap';
import './login.css';
import axios from 'axios'
import { Redirect } from 'react-router-dom';

export default class login extends Component {
  constructor(props){
    super(props);
    this.state={
      email:"",
      password:"",
      redirect: false,
    }
  }


  handleSubmit = () => {
    const signinDetails ={
      email:this.state.email,
      password:this.state.password,
    }

    this.setState({redirect: true});
    
    axios.post(`http://localhost:8000/api/signin`,signinDetails)
    .then(res => {
      console.log(res);
      console.log(res.data.user.name);
      this.props.getProps(res.data.user.name);
    })
      
    }
        
    renderRedirect =() => {
      if(this.state.redirect){
          return <Redirect to='/' />
        }
      }

  handleChangeUser = (event) => {
    this.setState({email:event.target.value})
  }
  handleChangePassword = (event) => {
    this.setState({password:event.target.value})
  }

  render() { 
    return (
      
      <Modal {...this.props} centered>
      {this.renderRedirect()}
      <div className="login">
            <Modal.Header closeButton>
              <h1 className="form_header">Login</h1>
            </Modal.Header>
            
            <Modal.Body>
              
                    <Form>   
                      <input className="form_input_field p-3 mb-3" type="text" value={this.state.email} required placeholder="Email-Id" onChange={this.handleChangeUser}/>
                      
                      <input className="form_input_field p-3 mb-3" type="password" value={this.state.password} required placeholder="Password" onChange={this.handleChangePassword}/> 

                      <Button className="form_input_field p-3 mb-3 log_input" variant="success" onClick={this.handleSubmit}>Login</Button>
                    </Form>
                
            </Modal.Body>
            
            <Modal.Footer>
              <Button variant="dark" onClick={this.props.onHide}>Close</Button>
            </Modal.Footer>
          </div>
      </Modal>
    )
  }
}