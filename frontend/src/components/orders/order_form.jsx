
import React from 'react';
import orderCreate from './order_create.css'


class OrderForm extends React.Component {
  constructor(props) {
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

  }
  componentDidMount() {
    this.props.fetchShipments(false)
    if (window.localStorage) {
      if (!localStorage.getItem("firstLoad")) {
        localStorage["firstLoad"] = true;
        window.location.reload();
      }
      else localStorage.removeItem("firstLoad");
    }
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

  shipmentInfo() {
    let info = this.props.shipments;

    let values = [];
    for (let i = 0; i < info.length; i++) {
      if (info[i].full === false && info[i].delivered === false && info[i].weight !== 0) {
        values.push(
          <option key={info[i]._id} value={info[i]._id}>

            {`${info[i].departure}, Available weight: ${Number.parseFloat(info[i].weight).toFixed(2)} lb`}
          </option>
        )
      }
    }
    if (values.length !== 0) {
      return values;
    } else {
      return <option value={"I'm sorry"}>I'm sorry, no shipments available</option>
    }
  }


  update(field) {

    if (field === 'weight') {
      return e => this.setState({
        price: `${Number.parseFloat(e.currentTarget.value * 3.0).toFixed(2)}`,
        weight: e.currentTarget.value
      })
    }

    if (field === 'shipmentId') {
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


    let businessId = "";
    if (this.state.shipmentId.length === 0) {
      alert("Please pick a departure date")
      return;
    } else if (this.state.shipmentId === "I'm sorry") {
      alert("I'm sorry, there are no available shipments")
      this.props.history.push("/")
      return;
    } else {
      businessId = this.props.BOId[this.state.shipmentId].userId._id
    }

    let shipment = this.props.BOId[this.state.shipmentId]
    let newWeight = (shipment.weight - this.state.weight)



    if (this.state.receiverName.length === 0) {
      alert("Please enter receiver's name")
      return; 
    } else if (this.state.weight.length === 0) {
      alert("Please enter weight")
      return;
    } else if (newWeight > 0.1) {

      let updatedShipment = Object.assign({}, shipment, { weight: newWeight })
      let order = Object.assign({}, this.state, { businessOwnerId: businessId, weight: this.state.weight })

      this.props.createOrder(order)
        .then(order => this.props.updateShipment(updatedShipment))
        .then(alert("Order is successfully created"))
        .then(this.props.history.push('/'))
    } else if ( newWeight === 0 ) {
      let updatedShipment = Object.assign({}, shipment, { weight: newWeight, full: true })
      let order = Object.assign({}, this.state, { businessOwnerId: businessId, weight: this.state.weight })

      this.props.createOrder(order)
        .then(order => this.props.updateShipment(updatedShipment))
        .then(alert("Order is successfully created"))
        .then(this.props.history.push('/'))
    } else if (this.state.description.length === 0) {
      alert("Please write description")
      return;
    } else {
      alert("Over exceeded the available amount, please try again")
      return
    }
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


  render() {

    if (this.props.shipments.length === 0) return null;
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
                  id='price' />

              </div>

              <div>
                <p>Departure</p>
                <select value={this.state.shipmentId} onChange={this.update('shipmentId')} id='option-select'>
                  <option defaultValue={''} >Shipment Schedule</option>
                  {this.shipmentInfo()}
                  {/* {this.renderErrors()} */}
                </select>
                {/* <p>Availble weight</p>
                <p>{this.props.BOId[this.state.shipmentId].weight}</p> */}
              </div>
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