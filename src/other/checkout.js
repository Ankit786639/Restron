import React, { Component } from 'react'
import Header from '../Homepage/Header'
import Footer from '../Homepage/footer'

export default class checkout extends Component {
constructor(props){
    super(props);
    this.state = {
        name:'',
        qty:'',
        price:'',
        localCart:[],
        grandTotal:[],
    }
}
async componentDidMount(){
    var cart = JSON.parse(localStorage.getItem('cart'));
    await this.setState({localCart:cart})
}

render() {
    var netAmount = 0;
        return (
            <div className="bg">
                <Header/>
                <div className="container">
                    <div className="foodMenu mt-5">
                        <h1 className="special-title-2 text-center p-2">Checkout</h1>
                    </div>
                    <div className="foodMenu p-3 mb-5">
                    {
                        this.state.localCart.map(ele => {
                            netAmount = netAmount + (ele.price*ele.quantity);
                            // console.log("grtotal",this.state.grandTotal)
                            return (
                                <div className="row foodMenu d-flex m-2">
                                    <span className="ml-5 col-2">{ele.itemName}</span>
                                    <span className="ml-5 col-1">Quantity:{ele.quantity}</span>
                                    <span className="ml-5 col-1">Price:{ele.price}</span>
                                    <span className="ml-5 col-2">Total price: {ele.price * ele.quantity}</span>
                                </div>
                                )
                            })
                    }
                        <div className="text-center ">
                            <h1>Net Amount = {netAmount}</h1>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}
