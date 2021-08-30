// import e from 'express';
import React from 'react';
import orderCreate from './order_create.css'


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
    this.updateWeight = this.updateWeight.bind(this);

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
          {`Departure: ${info[i].departure}, Available weight: ${Math.round((info[i].weight * 100) / 100).toFixed(2)}lb`}
        </option>
      ) 
    }
    return values; 
  }
  

  update(field){
    
    if (field === 'weight') {
      return e => this.setState({
        price: `${Math.round(((e.currentTarget.value * 3.0) * 100 )/ 100 ).toFixed(2) }`,
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

    this.updateWeight() ? 
      this.props.createOrder(order)
        .then(alert("Order is successfully created")) 
        .then(this.props.history.push('/'))
      : 
      alert("Over exceeded the available amount, please try again")
    // this.props.createOrder(order)
    //   .then(this.updateWeight())
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

updateWeight(){
  // let shipment = this.props.BOId[this.state.shipmentId]
  // let newWeight = (shipment.weight - this.state.weight)
  // let updatedShipment = Object.assign({}, shipment, {weight: newWeight})
  // this.props.updateShipment(updatedShipment) 
  let shipment = this.props.BOId[this.state.shipmentId]
  let newWeight = (shipment.weight - this.state.weight)
  // newWeight = newWeight > 0 ? newWeight : shipment.weight
  if( newWeight > 0 ){
    let updatedShipment = Object.assign({}, shipment, { weight: newWeight })
    this.props.updateShipment(updatedShipment)
  } else {
    return false
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

          <form onSubmit={this.handleSubmit} id='order-form'>

            <div id='left-order'>
              <div className="create-order-input">

                <div className="create-order-label-box">
                  <h2 className="create-order-label">Receiver Name</h2>
                </div>

                <input type="text"
                  value={this.state.receiverName}
                  onChange={this.update('receiverName')}
                  className="create-order-user-input" />

              </div>

              <div className="create-order-input">

                <div className="create-order-label-box">
                  <h2 className="create-order-label">Weight</h2>
                </div>

                <input type="number"
                  value={this.state.weight}
                  onChange={this.update('weight')}
                  className="create-order-user-input" />

              </div>

              <div className="create-order-input">

                <div className="create-order-label-box">
                  <h2 className="create-order-label">Description</h2>
                </div>

                <textarea
                  value={this.state.description}
                  onChange={this.update('description')}
                  className="create-order-user-input" />

              </div> 
            </div>
            
            <div id='right-order'>
              <div className="create-order-input">

                <div className="create-order-label-box">
                  <h1 className="create-order-label">Total Price</h1>
                </div>

                <input type="number"
                  value={this.state.price}
                  onChange={this.update('price')}
                  readOnly="readOnly"
                  className="create-order-user-input" 
                  id='price'/>

              </div>

              <select value={this.state.shipmentId} onChange={this.update('shipmentId')} id='option-select'>
                <option defaultValue={''} >Shipment Schedule</option>
                {this.shipmentInfo()}
              </select>
              {/* <select value={this.state.shipmentId} onChange={this.update('shipmentId')} id='option-select'>
                <option defaultValue={''} >Shipment Schedule</option>
                {this.shipmentInfo()}
              </select> */}


              <div className="create-order-button-container">

                <button className="create-post-form-button">Reserve your spot</button>
              
              </div>
            </div>
            
          </form>

        </div>

      </div>
    )
  }
}

export default OrderForm;