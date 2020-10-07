import React from 'react'
import Header from '../Homepage/Header';
import {Link} from 'react-router-dom';
import img1 from '../image/download (1).png'
import img2 from '../image/download.png';

export default function About() {
    return (
        <div>
          <Header/>
          <div className="homepage-about-us bg">      
            <div className="homepage-about-us-caption bor row">
              <div className="bor">
                <img src={img1} alt="image"/>
              </div>  
            
              <div className="der">
                <h2 className="special-title-2 mt-5">ABOUT US</h2>

                <h4 className="special-title-4 ">Tradition &amp; Passion</h4>

                <div id="about-description">
                  <p className="homepage-about-us-description mt-5">
                    Started with the idea of making food available for all at an pocket friendly price, we have tried to cover all the areas of NCR.
                    We have tried to connect every restaurant of NCR region to provide every  possible option, enabling our vision of better and tastier food for every people at an affordable price.
                    We not only connect people to food in every context but work closely with restaurants to enable a sustainable ecosystem.
                  </p>
                  
                  <Link className="btn btn-outline-dark viewButton" to="/ourstory" role="button">OUR STORY</Link>
                </div>
              </div>

              <div className="bor">
                <img src={img2} alt="image"/>
              </div>  
            </div>
          </div>
        </div>
  )
}
