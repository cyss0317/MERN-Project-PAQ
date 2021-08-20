import React from 'react';

class UserIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: this.props.price,
      weight: this.props.weight,
      receiverName: this.props.receiverName,
      description: this.props.description
    }
    // this.fetchUserOrders = this.fetchUserOrders.bind(this);
  }

  componentDidMount() { 
    this.props.fetchUserOrders() 
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
    let orders = this.props.orders ? this.props.orders : [];

    if (orders.length != 0){
      return (
        <div className="user-index-container">
          <h1>Hello</h1>
          {
            orders.map ((order, index) => {
              return (
                <div key={order.id} className="user-feed-box">
                  <div className="order-feed-">
                    {order.weight}
                  </div>
                  <div className="button-container">
                    <div className="edit-button-container">
                      <button className="edit-button">Edit Order</button>
                    </div>
                    <div className="delete-button-container">
                      <button className="delete-button">Delete Order</button>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      )
    } else {
      return (
        <h2>There are no orders for this user!</h2>
      )
    }
  }
}

export default UserIndex;