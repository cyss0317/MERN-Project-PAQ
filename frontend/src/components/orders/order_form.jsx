// import e from 'express';
import React from 'react';
import { ThisMonthInstance } from 'twilio/lib/rest/api/v2010/account/usage/record/thisMonth';

class OrderForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      price: '',
      weight: '',
      receiverName: '',
      description: '',
      delivered: 'false',
      businessOwnerId: '',
      customerId: this.props.currentUserId,
      shipmentId: ''
    }
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.shipmentInfo = this.shipmentInfo.bind(this); 
    this.updateBusinessId = this.updateBusinessId.bind(this); 

  }
  componentDidMount(){
   
    this.props.fetchShipments(false)
   
  }
  
  shipmentInfo(){
    let info = this.props.shipments;

    let values = []; 
    for(let i =0; i < info.length ; i++){
      values.push(
        <option key={info[i]._id} value={info[i]._id}> 
          {info[i].departure} 
        </option>
      ) 
    }
    return values; 
  }
  
  updateBusinessId(id){
    this.setState({
      businessOwnerId: id
    })
  }


  update(field){
    // this.updatePrice(field)
    
    if (field === 'weight') {
      return e => this.setState({
        price: `${Math.round( ((e.currentTarget.value * 3.0) * 100 )/ 100 ).toFixed(2) }`,
        weight: e.currentTarget.value
      })
    }

    if (field === 'shipmentId'){
      return e => this.setState({
        shipmentId: e.currentTarget.value,
      })
    }
    

    return e => this.setState({
      [field]: e.currentTarget.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()

    let order = Object.assign({}, this.state, {businessOwnerId: this.props.BOId[this.state.shipmentId].userId._id })


    this.props.createOrder(order)
    this.setState({
      price: '',
      weight: '',
      receiverName: '',
      description: '',
      delivered: 'false',
      businessOwnerId: '',
      customerId: '',
      shipmentId: ''
    })
    
  }

  renderErrors() {
    if (!this.props.errors) {
      // console.log(this.props)
      return null
    } else {
      return (
        <ul className='errors'>
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>
              {error}
            </li>
          ))}
        </ul>
      );
    }
  }

  render() {
    if(this.props.shipments.length === 0) return null; 
    
    return (
      <div className="create-order-form-container">
        <div className="create-order-form-title">
          <div className="create-order-form-label">Create Order</div>
        </div>
        <div className="create-order-form-box">
          <form onSubmit={this.handleSubmit}>
            <div className="create-order-input">
              <div className="create-order-label-box">
                <label className="create-order-label">Price:</label>
              </div>
              <input type="number"
                value={this.state.price}
                onChange={this.update('price')}
                readOnly="readOnly"
                className="create-order-user-input" />
            </div>
            <div className="create-order-input">
              <div className="create-order-label-box">
                <label className="create-order-label">Weight:</label>
              </div>
              <input type="number"
                value={this.state.weight}
                onChange={this.update('weight')}
                className="create-order-user-input" />
            </div>
            <div className="create-order-input">
              <div className="create-order-label-box">
                <label className="create-order-label">Receiver Name:</label>
              </div>
              <input type="text"
                value={this.state.receiverName}
                onChange={this.update('receiverName')}
                className="create-order-user-input" />
            </div>
            <div className="create-order-input">
              <div className="create-order-label-box">
                <label className="create-order-label">Description:</label>
              </div>
              <input type="textarea"
                value={this.state.description}
                onChange={this.update('description')}
                className="create-order-user-input" />
            </div>
            <div className="create-order-button-container">
              <button className="create-post-form-button">Reserve your spot</button>
            </div>

            <select value={this.state.shipmentId} onChange={this.update('shipmentId')}>
              <option defaultValue={''}> </option>
            {this.shipmentInfo()}
              {/* {this.props.shipments.map(shipment => {
               return <option value={shipment._id}> {shipment.departure} </option>
              })} */}
            </select>
            
            
          </form>
        </div>
      </div>
    )
  }
}

export default OrderForm;