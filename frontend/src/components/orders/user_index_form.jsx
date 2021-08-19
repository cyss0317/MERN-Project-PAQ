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

  componentDidMount() { this.props.fetchUserOrders() }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
    let orders = this.props.orders ? this.props.orders : [];
    debugger
    if (orders.length != 0){
      return (
        <div className="user-index-container">
          {
            orders.map ((order, index) => {
              return (
                <div key={order.id} className="user-feed-box">
                  <div className="order-feed-">
                    {order.weight}
                  </div>
                  <div className="button-container">
                    <div className="edit-button-container">

                    </div>
                    <div className="delete-button-container">

                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      )
    }
  }
}

export default UserIndex;