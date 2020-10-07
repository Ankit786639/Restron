import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import Header from '../Homepage/Header'
import Footer from '../Homepage/footer'
import './Menu.css'


export default class Menu extends Component {

  

  render(){
    return (
      <div className="bg">
      <Header />
      <div className="homepage-menu container text-center">
        <h1 className="text-center container special-title-2 foodMenu">Menu</h1>
        <div className="row">
          <div className="col-md-4 foodMenu">
            <h3 className="special-title-2 mt-5">Food</h3>
            <div id="food">
              <img
                src="https://res.cloudinary.com/pictureelement/image/upload/q_auto,f_auto,c_scale,w_200/v1535882302/website-template-3/homepage-food.jpg" 
                srcset="
                  https://res.cloudinary.com/pictureelement/image/upload/q_auto,f_auto,c_scale,w_200/v1535882302/website-template-3/homepage-food.jpg 1x, 
                  https://res.cloudinary.com/pictureelement/image/upload/q_auto,f_auto,c_scale,w_400/v1535882302/website-template-3/homepage-food.jpg 2x,
                  https://res.cloudinary.com/pictureelement/image/upload/q_auto,f_auto,c_scale,w_600/v1535882302/website-template-3/homepage-food.jpg 3x"
                alt="Food Menu"    className="rounded-circle lazyload" />
              <p className="mt-4">
              Craving for tasty meal has now become cost effective. Gift your senses with a sensuous feast and feel like being in heaven. 
              <br/><span>Give it a try!</span>
              </p>
              <Link className="btn btn-outline-dark viewButton mb-5" to={{pathname:'/food', state:{category:"FOODS"}}}  role="button">VIEW MENU</Link>
            </div>
          </div>
          <div className="col-md-4 foodMenu dessert">
            <h3 className="special-title-2 mt-5">Desserts</h3>
            <div id="desserts">
              <img 
                src="https://res.cloudinary.com/pictureelement/image/upload/q_auto,f_auto,c_scale,w_200/v1535885127/website-template-3/homepage-desserts.jpg" 
                srcset="
                  https://res.cloudinary.com/pictureelement/image/upload/q_auto,f_auto,c_scale,w_200/v1535885127/website-template-3/homepage-desserts.jpg 1x, 
                  https://res.cloudinary.com/pictureelement/image/upload/q_auto,f_auto,c_scale,w_400/v1535885127/website-template-3/homepage-desserts.jpg 2x,
                  https://res.cloudinary.com/pictureelement/image/upload/q_auto,f_auto,c_scale,w_600/v1535885127/website-template-3/homepage-desserts.jpg 3x"
                alt="Desserts Menu"    className="rounded-circle lazyload" />
              <p className="mt-4">
              A finisher that helps the eater feel pampered and make sweeter memories. It adds a joy that harkens back to our childhood.
              <br/><span>Give it a try!</span>
              </p>
              <Link className="btn btn-outline-dark viewButton mb-5" to={{pathname:'/food', state:{category:"DESSERTS"}}} onClick={this.categoryFilter} role="button">VIEW MENU</Link>
            </div>
          </div>
          <div className="col-md-4  foodMenu">
            <h3 className="special-title-2 mt-5">Drinks</h3>
            <div id="drinks">
              <img 
                src="https://res.cloudinary.com/pictureelement/image/upload/q_auto,f_auto,c_scale,w_200/v1535885398/website-template-3/homepage-drinks.jpg" 
                srcset="
                  https://res.cloudinary.com/pictureelement/image/upload/q_auto,f_auto,c_scale,w_200/v1535885398/website-template-3/homepage-drinks.jpg 1x, 
                  https://res.cloudinary.com/pictureelement/image/upload/q_auto,f_auto,c_scale,w_400/v1535885398/website-template-3/homepage-drinks.jpg 2x,
                  https://res.cloudinary.com/pictureelement/image/upload/q_auto,f_auto,c_scale,w_600/v1535885398/website-template-3/homepage-drinks.jpg 3x"
                alt="Drinks Menu"    className="rounded-circle lazyload" />
              <p className="mt-4">
              Drinks not only provide essential hydration but can also be a source of nutrients. It just depends on you how you understand your need.<br/><span>Give it a try!</span>
              </p>
              <Link className="btn btn-outline-dark viewButton mb-5" to={{pathname:'/food', state:{category :"DRINKS", onClick:"categoryFilter"}}}role="button">VIEW MENU</Link>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
}