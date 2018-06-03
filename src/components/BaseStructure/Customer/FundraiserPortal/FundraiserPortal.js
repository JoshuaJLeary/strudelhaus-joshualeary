import React, { Component } from 'react';
import { connect } from 'react-redux';
import CustomerInfoForm from '../CustomerInfoForm/CustomerInfoForm'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Modal,Popover,Tooltip } from 'react-bootstrap';
import StrudelList from '../StrudelList/StrudelList';
import ShoppingCartList from '../ShoppingCartList/ShoppingCartList';
import Nav from '../../../Nav/Nav';
import SquareForm from '../SquareForm/SquareForm';
import SweetAlert from 'sweetalert2-react';
import './FundraiserPortal.css';

const mapStateToProps = state => ({
  view: state.toggleShoppingView,
  cart: state.orderView,
  customer: state.customerInfo,
  url: state.paymentView
  });
  let total = 0;
class FundraiserPortal extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        show: false,
        
      };
    }
    handleClose =()=> {
      this.setState({ show: false });
    }
  
    handleShow =()=> {
      this.setState({ show: true });
    }
  
componentDidMount() {
}
    
componentDidUpdate() {
  
        if (this.props.url != this.props.url || this.props.url.length >= 1){
          
          
        window.location = this.props.url;
        
        }

        if(this.props.url === false){
          // alert('please fill out every item on the form and choose strudels')
          this.state.show = true
          this.props.dispatch({
            type:'PAYMENT_VIEW',
            payload: []
          })
        }
      }
      postTransaction=()=>{
        
        this.props.dispatch({
          type: 'POST_CUSTINFO',
          payload: {
                  products: this.props.cart,
                  customerInfo: this.props.customer.customerInfo,
                  campaignName: this.props.match.params.name,
                  total: total
          }
        });
        
       }


add(a,b){
  return parseInt(a) + parseInt(b)
  }
render() {
  
  let totalArr = this.props.cart && this.props.cart.map( (product)=>{
    return(
      product.quantity * product.product_price
    )
})

if (this.props.cart.length > 0){
   total = totalArr.reduce(this.add);
}

    return (
      <div id="portalDiv">
        <div id="portalContainer">
          <SweetAlert show={this.state.show} title="Choose Your Strudels"
            text="Please complete the form and choose your strudels."onConfirm={() => this.setState({ show: false })}/>
          <Grid>
            <Row>
              <Col md={10}>
                <div id="titleDiv">
                  <h2 className="welcome">Welcome to the {this.props.match.params.name} Strudel Fundraiser!</h2>
                </div>
                <div id="strudelListDiv">
                  <StrudelList campaignName={this.props.match.params.name} />
                </div>
                <div id="customerFormDiv">
                  <CustomerInfoForm />
                </div>
                  <Button className="checkout" onClick={this.postTransaction}>Checkout </Button>
                  {/* <SquareForm campaignName={this.props.match.params.name}/> */}
              </Col>
              <Col md={2}>
                <div id="shoppingCartDiv">
                  <ShoppingCartList />
                </div>
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    )
  }
  
  
  }

export default connect(mapStateToProps)(FundraiserPortal);