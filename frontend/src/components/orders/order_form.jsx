import e from 'express';
import React from 'react';

class OrderForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      price: '',
      weight: '',
      receiverName: '',
      description: '',
      delivered: "false",
      businessOwnerId: '1',
      customerId: this.props.currentUserId,
      shipmentId: '2'
    }
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field){

    // if (field === 'weight') {
    //   this.setState({
    //     price: e.currentTarget.value * 3
    //   })
    // }

    return e => this.setState({
      [field]: e.currentTarget.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    let order = Object.assign({}, this.state)

    // this.setState(prevState => {
    //   return {
    //     price: this.state.weight * 3
    //   }
    // })

    this.props.createOrder(order);
    //not sure if we are going to have a modal for form
    // .then(() => this.props.closeModal())
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

  render() {
    return (
      <div className="create-order-form-container">
        <div className="create-order-form-title">
          <div className="create-order-form-label">Create Order</div>
        </div>
        <div className="create-order-form-box">
          <form onSubmit={this.handleSubmit}>
            {/* <div className="create-order-input">
              <div className="create-order-label-box">
                <label className="create-order-label">Price:</label>
              </div>
              <input type="number"
                value={this.state.price}
                onChange={this.update('weight')}
                className="create-order-user-input"
                readonly="readonly" />
            </div> */}
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
          </form>
        </div>
      </div>
    )
  }
}

export default OrderForm;