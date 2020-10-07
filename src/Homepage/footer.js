import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import logo from '../image/logo.png'
import './footer.css'

export default class footer extends Component {

  facebook = () => {
        alert()
        const url = "https://www.facebook.com/";
        window.location.href = url
    }

  render() {
    return (
<div>    
      <footer className="page-footer bgcolor container-fluid ">
        <div className="container ">
          <div className="container-fluid  ">
            <Link className="navbar-brand animated pulse  col-2 offset-5" to="/">
              <img src={logo} alt="Logo" className="logo"/>
            </Link><br/>
          </div>  

          <div className="row  mt-3">
            <div className="col-md-3 blc brc">
              <h5 className="page-footer-title">OPENING HOURS</h5>

              <p>Open daily from 8am</p> 

              <p>Bar: Daily from 8am - 12pm</p> 

              <p>Breakfast: Daily from 8am - 11am</p> 

              <p>Lunch: Daily from 12pm - 3pm</p>

              <p>Dinner: Daily from 6pm - 12pm</p>
            </div>

            <div className="col-md-3 h-100 brc">
              <h5 className="page-footer-title mt-3 mt-md-0">LOCATION</h5>

              <address>
                Grecko Bar &amp; Seafood Restaurant<br />

                24 Akti Kampani St.<br />

                846 00, Mykonos, Greece<br />

                <abbr title="Phone">P:</abbr> (123) 456-7890<br />

                <abbr title="Email">E:</abbr> info@grecko.com
              </address>
            </div>

            <div className="col-md-3 h-100">
              <h5 className="page-footer-title mt-3 mt-md-0">FOLLOW US</h5>
              
              <div className="mb-3">
                <Link className="footer-social bgcolor" onClick={this.facebook} ><i className="fa fa-facebook" aria-hidden="true"></i></Link>
                
                <Link className="footer-social bgcolor" to="https://github.com/PictureElement" ><i className="fa fa-tripadvisor" aria-hidden="true"></i></Link>
                
                <Link className="footer-social bgcolor" to="https://github.com/PictureElement" ><i className="fa fa-instagram" aria-hidden="true"></i></Link>
              </div>
            </div>

            <div className="col-md-3 h-100 blc">
              <h5 className="page-footer-title mt-3 mt-md-0">NEWSLETTER</h5>

              <p>
                Complete the form to receive information on the latest events,
                news and special offers at Grecko.
              </p>

              <form id="newsletter-form">
                <label className="sr-only" for="formEmail">Email</label>

                <input type="email" className="form-control form-control-sm rounded" id="formEmail" placeholder="name@example.com" />

                <button type="submit" className="btn btn-sm btn-outline-light btn-block mt-2 form_button">Subscribe</button>
              </form>
            </div>
          </div>
        </div>
        <div className="page-footer-copyright container-fluid text-center bgcolor">
          © 2018 Grecko Bar &amp; Restaurant. All rights reserved.<br />
          Design &amp; Development by <Link to="https://pictureelement.github.io/portfolio-2/">PictureElement</Link> (Marios Sofokleous).
        </div>
      </footer>
    </div>
    )
}
}