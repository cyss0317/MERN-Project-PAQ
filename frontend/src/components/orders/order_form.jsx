import React from 'react';

class OrderForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      price: '',
      weight: '',
      receiverName: '',
      description: '',
      delivered: '',
      businessOwnerId: '',
      customerId: '',
      shipmentId: ''
    }
  }

  update(field){
    return e => thi.setState({
      [field]: e.currentTarget.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    let order = Object.assign({}, this.state)

    this.props.createOrder(order)
    //not sure if we are going to have a modal for form
    .then(() => this.props.closeModal())
  }

  render() {
    return (
      <div className="create-order-form-container">
        <div className="create-order-form-title">
          <div className="create-order-form-label">Create Order</div>
        </div>
        <div className="create-order-form-box">
          <form onSubmit={this.handleSubmit}>
            <div className="create-order-input">
              <input type="number"
                value={this.state.weight}
                onChange={this.update('weight')}
                className="create-order-user-input" />
            </div>
            <div className="create-order-input">
              <input type="text"
                value={this.state.receiverName}
                onChange={this.update('receiverName')}
                className="create-order-user-input" />
            </div>
            <div className="create-order-input">
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