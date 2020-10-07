import React from 'react'
import Header from '../Homepage/Header';
import Footer from '../Homepage/footer';
import img from '../image/contact.jpg';
import './contact.css';

export default function Contact() {
    return (
        <div>
          <Header />
            {/*<!-- CONTACT -->*/}
            <div className="container-fluid contact-information-wrapper dark-overlay">
              <img  sizes="(max-width: 2560px) 100vw, 2560px" src={img} alt="" className="contact-information-wrapper-bg" />

            <div className="contact-information container ">
              <h1 className="special-title-2 text-center contactBg">CONTACT</h1>

              <h2 className="special-title-2 text-center contactBg">Leave Your Message</h2>

              <div className="row">
                <div className="col-md-7 contact-form contactBg">
                  <form>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                          <label for="inputName">NAME:</label>
                          <input type="text" className="form-control" id="inputName" placeholder="John Smith" />
                      </div>

                      <div className="form-group col-md-6">
                          <label for="inputEmail">EMAIL:</label>
                          <input type="email" className="form-control" id="inputEmail" placeholder="name@example.com" />
                      </div>
                    </div>

                    <div className="form-group">
                      <label for="inputTextarea">MESSAGE:</label>
                      <textarea className="form-control" id="inputTextarea" rows="7" placeholder="Additional details"></textarea>
                    </div>

                    <button type="submit" className="btn btn-light">SUBMIT</button>
                  </form>
                </div>

                <div className="contact-details col-md-5">
                  {// <div className="address">
                  //   <h6>ADDRESS</h6>

                  //   <address>
                  //     <abbr title="Phone">P:</abbr> (123) 456-7890<br />

                  //     <abbr title="Email">E:</abbr> Restron.com
                  //   </address>
                  // </div>
                  }

                  <div className="opening-hours contactBg">
                    <h6>BAR SERVICE</h6>
                    <p>Daily: Bookings from 9am - 11pm</p>
                    <h6>LUNCH SERVICE</h6>
                    <p>Daily: Bookings from 12pm - 1.30pm</p>
                    <h6>DINNER SERVICE</h6>
                    <p>Daily: Bookings from 6pm - 9.30pm</p>
                  </div>

                  <div className="connect contactBg">
                    <a className="contact-social mr-2" aria-label="facebook"><i className="fa fa-fw fa-facebook" aria-hidden="true"></i></a>
                    <a className="contact-social mr-2"  aria-label="LinkedIn"><i className="fa fa-fw fa-linkedin" aria-hidden="true"></i></a>
                    <a className="contact-social"  aria-label="instagram"><i className="fa fa-fw fa-instagram" aria-hidden="true"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        <Footer />
      </div>
    )
  }
