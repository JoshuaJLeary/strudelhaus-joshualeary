import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import StrudelListItem from './StrudelListItem/StrudelListItem';


const mapStateToProps = state => ({
    
    cart: state.orderView,
    products: state.customerProducts
  });

class StrudelList extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        
      };
    }
componentDidMount() {
  this.props.dispatch({
    type: 'GET_CUSTOMERPRODUCTS',
    payload: this.props.campaignName
    
  });
        console.log(this.props.products)
      }
    
componentDidUpdate() {
        
      }

      

addToOrder = (product)=>{

  const evalProduct = (item => item.product_name == product.product_name || item.name == product.product_name);
  const findItem = this.props.cart.find(evalProduct);
  console.log(findItem)
  if(!findItem){
    
    product.quantity = 1
    this.props.dispatch({
      type: 'CURRENT_ORDER',
      payload: { name: product.product_name,
      quantity: "1",
      base_price_money: { amount: (parseInt(product.product_price)* 100), currency: 'USD' } }
    });
   
  }
  
}
subtractFromOrder = (product)=>{
  
  
  product.quantity--
  
  this.props.dispatch({
    type: 'CURRENT_ORDER',
    payload: product
  });
}
render() {

let sweetProducts = this.props.products.filter(product => product.product_type === "sweet");
let savoryProducts = this.props.products.filter(product => product.product_type === "savory");
let displaySweet = sweetProducts.map( (product) => {
  return( <StrudelListItem key={product.product_name} addToOrder={this.addToOrder} product={product}/>)
});
let displaySavory = savoryProducts.map( (product) => {
  return( <StrudelListItem key={product.product_name} addToOrder={this.addToOrder} product={product}/>)
});

    return (
      <div>
          <div className="column">
            <h4>Sweet Strudels</h4>
            {displaySweet}
          </div>
          <div className="column">
            <h4>Savory Strudels</h4>
            {displaySavory}
          </div>
      </div>
    )
  }
    
  
  }

export default connect(mapStateToProps)(StrudelList);