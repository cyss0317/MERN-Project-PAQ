import React from 'react';

class EditOrderForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: this.props.price,
      weight: this.props.weight,
      receiverName: this.props.receiverName,
      description: this.props.description,
      delivered: this.props.delivered,
      businessOwnerId: this.props.businessOwnerId,
      customerId: this.props.currentUserId,
      shipmentId: this.props.shipmentId
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {

    if (field === 'weight') {
      return e => this.setState({
        price: `${e.currentTarget.value * 3.0}`,
        weight: e.currentTarget.value
      })
    }

    return e => this.setState({
      [field]: e.currentTarget.value
    })

  }

  handleSubmit(e) {
    e.preventDefault()
    let order = Object.assign({}, this.state)
    this.props.createOrder(order);
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
          <div className="create-order-form-label">Edit Form</div>
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
            <div className="button-container">
              <button className="edit-order-form-button">Save Changes</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default EditOrderForm;