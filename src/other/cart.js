import React, { Component } from 'react'
import Header from '../Homepage/Header'
import Footer from '../Homepage/footer'
import {Link} from 'react-router-dom'
// import Chapati from '../image/Chapati.jpg'
import './cart.css'
import {Chapati,Dal,Raita,Palak_Paneer,Rice,Ice_cream,Cakes,Gulab_Jamun,Kaju_Katli,Sone_papdi,Mango_Juice,Mango_Shake,Red_Bull,Lassi,Cold_drinks,Cocktail,Whisky} from './pics'


export default class add_to_cart extends Component {
    constructor(props){
        super(props);
        this.state={
            array:[],
            quantity:0,
            items:[
                {photo:Chapati, name:"Chapati"},
                {photo:Dal, name:"Dal"},
                {photo:Raita, name:"Raita"},
                {photo:Palak_Paneer, name:"Palak Paneer"},
                {photo:Rice, name:"Rice"},
                {photo:Ice_cream, name:"Ice cream"},
                {photo:Cakes, name:Cakes},
                {photo:Gulab_Jamun, name:"Gulab Jamun"},
                {photo:Kaju_Katli, name:"Kaju Katli"},
                {photo:Sone_papdi, name:"Sone papdi"},
                {photo:Mango_Juice, name:"Mango Juice"},
                {photo:Mango_Shake, name:"Mango Shake"},
                {photo:Red_Bull, name:"Red Bull"},
                {photo:Lassi, name:"Lassi"},
                {photo:Cold_drinks, name:"Cold drinks"},
                {photo:Cocktail, name:"Cocktail"},
                {photo:Whisky, name:"Whisky"},
            ],    
        }
    }

    componentDidMount(){
        let data = JSON.parse(localStorage.getItem('cart'))
        this.setState({
            array:data,
        })
    }

    handleRemove = (Code) => {
        var cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
    var index;
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].itemCode === Code) {
          index=i;
          break;
        }
    }
    if(index === undefined) return 
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    window.location.reload();
    }


    handleQuantity = async(event) => {
        let eventName = event.target.name;
        let eventValue = event.target.value;
        await this.setState({quantity:eventValue})
        let data = JSON.parse(localStorage.getItem('cart'))
       
        let objCode = data.filter(ele => ele.itemCode === eventName)
        if(objCode.length>0){
            objCode[0].quantity = parseInt(this.state.quantity);
            console.log(objCode)
        }
        
    }

    imageShow = (itemName) => {
        let itemImage = this.state.items.filter(ele => ele.name === itemName)
        if(itemImage.length>0){
            return itemImage[0].photo
        }
    }


    render() {
        return (
            <div className="bg">
                <Header/>
                <div className="container">
                    <div className="foodMenu mt-5"><h1 className="text-center p-2 mt-3 special-title-2">Cart Item</h1></div>
                    {
                        this.state.array && this.state.array.length>0 ? this.state.array.map((obj) => {
                            return(
                                <div>   
                                    <div className="container  foodMenu  p-3 my-3 d-flex">
                                        <div className="">
                                            <img src={this.imageShow(obj.itemName)} alt={obj.itemName} className="cart-img"/>
                                        </div>

                                        <div className="w-100 mx-3 p-2">
                                            <div className="p-3">
                                                Category: {obj.category}
                                                <span className="float-right">Price : Rs {obj.price}/-</span>
                                            </div>

                                            <div className=" p-3 ">
                                                <span className="m-1">Code:"{obj.itemCode}"</span> <span className="m-1">Item:"{obj.itemName}"</span> <span className="m-1
                                                ">Restaurant:"{obj.restaurant}"</span>
                                                
                                                <div className="float-right">
                                                    Quantity:<input className="quantity text-center ml-1" value={this.state.quantity!==0 ? this.state.quantity : obj.quantity} min='1' name={obj.itemCode} type="number" onChange={this.handleQuantity}/>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="p-2" id="buttonDiv">
                                            <button className="py-1 px-3" onClick={() => this.handleRemove(obj.itemCode)}>Remove</button><br/>
                                        </div>
                                    </div>
                                </div>
                                )
                            })
                        :<div className="foodMenu text-center container-fluid my-5 p-5">
                            <h1 className="special-title-2 p-5">Cart is Empty !</h1>
                        </div>
                    }
                    {
                        this.state.array && this.state.array.length>0 &&
                        <div className="foodMenu my-5 p-3 float-right">
                            <Link to='/checkout'>
                                <button className="checkout p-2">Checkout</button>
                            </Link>
                        </div>
                    }
                </div>
                <Footer/>
            </div>
        )
    }
}
