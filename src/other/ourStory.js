import React from 'react'
import Header from '../Homepage/Header';
import Footer from '../Homepage/footer';
import './ourStory.css'

export default function Another() {
    return (
        <div>
        <Header />
        <main className="about-main">
        <div className="jumbotron about-jumbotron dark-overlay text-white">
          <img
            sizes="(max-width: 2560px) 100vw, 2560px"
            srcset="
              https://res.cloudinary.com/pictureelement/image/upload/q_auto,f_auto,c_scale,w_320/v1536008889/website-template-3/cover-about.jpg 320w,
              https://res.cloudinary.com/pictureelement/image/upload/q_auto,f_auto,c_scale,w_552/v1536008889/website-template-3/cover-about.jpg 552w,
              https://res.cloudinary.com/pictureelement/image/upload/q_auto,f_auto,c_scale,w_747/v1536008889/website-template-3/cover-about.jpg 747w,
              https://res.cloudinary.com/pictureelement/image/upload/q_auto,f_auto,c_scale,w_900/v1536008889/website-template-3/cover-about.jpg 900w,
              https://res.cloudinary.com/pictureelement/image/upload/q_auto,f_auto,c_scale,w_1070/v1536008889/website-template-3/cover-about.jpg 1070w,
              https://res.cloudinary.com/pictureelement/image/upload/q_auto,f_auto,c_scale,w_1224/v1536008889/website-template-3/cover-about.jpg 1224w,
              https://res.cloudinary.com/pictureelement/image/upload/q_auto,f_auto,c_scale,w_1367/v1536008889/website-template-3/cover-about.jpg 1367w,
              https://res.cloudinary.com/pictureelement/image/upload/q_auto,f_auto,c_scale,w_1521/v1536008889/website-template-3/cover-about.jpg 1521w,
              https://res.cloudinary.com/pictureelement/image/upload/q_auto,f_auto,c_scale,w_1654/v1536008889/website-template-3/cover-about.jpg 1654w,
              https://res.cloudinary.com/pictureelement/image/upload/q_auto,f_auto,c_scale,w_1777/v1536008889/website-template-3/cover-about.jpg 1777w,
              https://res.cloudinary.com/pictureelement/image/upload/q_auto,f_auto,c_scale,w_1905/v1536008889/website-template-3/cover-about.jpg 1905w,
              https://res.cloudinary.com/pictureelement/image/upload/q_auto,f_auto,c_scale,w_2033/v1536008889/website-template-3/cover-about.jpg 2033w,
              https://res.cloudinary.com/pictureelement/image/upload/q_auto,f_auto,c_scale,w_2143/v1536008889/website-template-3/cover-about.jpg 2143w,
              https://res.cloudinary.com/pictureelement/image/upload/q_auto,f_auto,c_scale,w_2263/v1536008889/website-template-3/cover-about.jpg 2263w,
              https://res.cloudinary.com/pictureelement/image/upload/q_auto,f_auto,c_scale,w_2380/v1536008889/website-template-3/cover-about.jpg 2380w,
              https://res.cloudinary.com/pictureelement/image/upload/q_auto,f_auto,c_scale,w_2488/v1536008889/website-template-3/cover-about.jpg 2488w,
              https://res.cloudinary.com/pictureelement/image/upload/q_auto,f_auto,c_scale,w_2560/v1536008889/website-template-3/cover-about.jpg 2560w"
            src="https://res.cloudinary.com/pictureelement/image/upload/q_auto,f_auto,c_scale,w_2560/v1536008889/website-template-3/cover-about.jpg"
            alt="cloudinary.com" className="about-jumbotron-bg bg_position" />
          <div className="about-jumbotron-caption">
            <div className="restron p-3"><h2 id="title-2" className="special-title-2">Restron</h2></div>
            <a className="about-arrow animated bounce" href="#about-history" aria-label="our history"><i className="fa fa-angle-down" aria-hidden="true"></i></a>
          </div>
        </div>

        <div id="about-history" className="about-history history">
          <div className="align-items-center">
              <h3 className="text-center his_dis container special-title-2">Our Story...</h3>
    
            <div id="history-description" className="container his_dis">
              <p className="mt-5 mb-5 ml-5 mr-5">
              As we all know that there are numerous available restaurants and websites connecting restaurants and hotels with people helping both in fulfilling their needs. But we have thought of giving widest possible variety of food specs at an affordable price by providing a variety of filters to get desired food at an expected price in the consumers mind.
              </p>
              <p  className =" ml-5 mr-5">
              For this purpose we have connected every available restaurant in the NCR region. And our distance filter is the most unique one which shows the results in ascending order of distance and expected delivery time and also for this purpose we can set min_distance and max_distance range and other similar available filters. 
              </p>
              <p className="mt-5 mb-5 ml-5 mr-5">
              This unique distance filter makes us unique from all other available websites. 
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  )
}
