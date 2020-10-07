import React, { Component } from 'react';
import './food.css';
import Header from '../Homepage/Header';
import Footer from '../Homepage/footer';
import item_of_jsonFile from '../assets/json/item.json'
import {Chapati,Dal,Raita,Palak_Paneer,Rice,Ice_cream,Cakes,Gulab_Jamun,Kaju_Katli,Sone_papdi,Mango_Juice,Mango_Shake,Red_Bull,Lassi,Cold_drinks,Cocktail,Whisky} from './pics'

export default class food extends Component {
    constructor(props){
        super(props);
        this.state = {
            localdata:JSON.parse(localStorage.getItem("cart")) && JSON.parse(localStorage.getItem("cart")).length>0 ? JSON.parse(localStorage.getItem("cart")) : [],
            restautantData:[],
            categoryData:[],
            res:['Raja Dhaba','Bikano Restaurant'],
            selection:'',
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


    async componentDidMount(){
        const item = item_of_jsonFile.filter(data=>data.category===this.props.location.state.category)
        await this.setState({categoryData:item})
        this.setState({restautantData:this.state.categoryData})
    }

    restaurant = async(event) => {
        await this.setState({selection:event.target.value})
        this.setState({restautantData:this.state.categoryData})
        if(this.state.res.includes(this.state.selection)){
            const filterRes = this.state.restautantData.filter(resFilter => resFilter.restaurant===this.state.selection);
            this.setState({restautantData:filterRes})
        }
        else{
            await this.setState({restautantData:this.state.categoryData})
        }
    }

    imageShow = (itemName) => {
        let itemImage = this.state.items.filter(ele => ele.name === itemName)
        if(itemImage.length>0){
            return itemImage[0].photo
        }
    }

    

    handleAddToCart = async (object) => { 
        var x = this.state.localdata.includes(object)
        if(x!=true){
            this.state.localdata.push(object);
        }
        else{
            object.quantity = object.quantity+1
        }
        console.log("x",x,object.quantity)
        localStorage.setItem('cart',JSON.stringify(this.state.localdata));
    }
    
    render() {       
        return (
            <div className="bgr">
            <Header/>
            <div className="container mt-3 mb-5">
                <div className="foodMenu">
                    <h1 className="text-center p-2 mt-3 special-title-2">{this.props.location.state.category}</h1>
                </div>

                <div className="container text-center mb-5">
                    <select className="Dropdown foodMenu border p-3" onChange={this.restaurant}>
                        <option value="active">Select your nearby  Restaurant</option>
                        {
                            this.state.res.map(restaurant => {
                                return <option>{restaurant}</option>
                            })
                        }
                    </select>
                </div>
                
                <div className="justify-content-center">    
                    {this.state.restautantData.map((filtereddata,index) =>{
                    return(
                            <div className="foodMenu item zoom" id="itemDiv">
                                <div className="m-2 p-3">
                                    <img src={this.imageShow(filtereddata.itemName)} alt={filtereddata.imageName} className="food-img"/>
                                </div>
                                
                                <div className="m-2">
                                    <h6 className="p-2">{filtereddata.category}</h6>
                                    <h6 className="p-2">{filtereddata.itemCode}</h6>
                                    <h6 className="p-2">{filtereddata.itemName}</h6>
                                    <h6 className="p-2">Only Rs {filtereddata.price}/-</h6>
                                    <h6 className="p-2">{filtereddata.restaurant}</h6>
                                </div>
                            
                                <div className="py-1 px-2 addToCartDiv ml-auto mr-3 my-2">
                                        <button className="Add_to_cart  mt-5 px-2 py-1" onClick={(e) => this.handleAddToCart(filtereddata)}>
                                            Add to Cart
                                        </button>
                                </div>
                            </div>
                        )}
                    )}
                </div>     
            </div>
            <Footer />
        </div>
        )
    }
}
