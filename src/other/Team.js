import React, { Component } from 'react';
import ReactCardCarousel from 'react-card-carousel';
import Ankit from '../image/mypic.jpg';
import Saurav from '../image/saurav.jpg';
import Shivam from '../image/shivam.jpg';
import Sanu from '../image/sanu.png';
import Header from '../Homepage/Header';
import './Team.css'

class MyCarousel extends Component {

  static get CARD_STYLE() {
    return {
      marginTop:'15px',
      height: '500px',
      width: '850px',
      paddingTop: '25px',
      textAlign: 'center',
      background: 'black',
      color: '#FFF',
      fontSize: '12px',
      textTransform: 'uppercase',
      borderRadius: '10px',
      border:'2px solid rgb(179, 99, 5)',
      boxShadow:'white 10px',
    };
  }

  render() {
    return (
      <div className="bgc">
        <Header/>
        <div className="pt-5">
        <div className="team text-center container border special-title-2">My Team</div>
        <div>
          <ReactCardCarousel autoplay={ true } autoplay_speed={ 5000 }>
          <div style={ MyCarousel.CARD_STYLE }>
              <div>
                <img src={Ankit} alt="Ankit's Pic" className="img_style"/>
              </div>

              <div  className="mt-2 card_text">Ankit Singh Bhadauria</div>

              <div  className="mt-2 card_text">Web Development</div>

              <div  className="mt-2 card_text">FrontEnd Developer & Designer</div>
          </div>
            
          <div style={ MyCarousel.CARD_STYLE }>
            <div>
              <img src={Saurav} alt="Saurav's Pic" className="img_style"/>
            </div>
              
            <div  className="mt-2 card_text">Saurav Ranjan Singh</div>

            <div  className="mt-2 card_text">Web Development</div>

            <div  className="mt-2 card_text">BackEnd Developer</div>
          </div>
                
          <div style={ MyCarousel.CARD_STYLE }>
            <div>
              <img src={Sanu} alt="Sanu's Pic" className="img_style"/>
            </div>
              
            <div  className="mt-2 card_text">Kumar Sanu</div>

            <div  className="mt-2 card_text">Web Development</div>

            <div  className="mt-2 card_text">BackEnd Developer</div>
          </div>

            <div style={ MyCarousel.CARD_STYLE }>
              <div>
                <img src={Shivam} alt="Shivam's Pic" className="img_style"/>
              </div>
            
              <div  className="mt-2 card_text">Shivam Srivastav</div>

              <div  className="mt-2 card_text">Web Development</div>

              <div  className="mt-2 card_text">Content Writer</div>

            </div>
        </ReactCardCarousel>
        </div>
        </div>
      </div>
    );
  }
}

export default MyCarousel;