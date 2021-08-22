import React from 'react';
import UserIndexItem from './order_index_item'; 
import UserOrderItem from './order_index_item'; 

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
    const {orders } = this.props; 
    return( 
       
      <div id="main-container">
      {/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script> */}


      <div id='table-main'>
          <h1 id='table-title'>List of orders</h1>
          <div id="table-columns-order">
              <p id="p3">Order number</p>
              <p id="p2">Price</p>
              <p id="p2">Weight</p>
              <p id="p2">ReceiverName</p>
              <p id="p2">Description</p>
              <p id="p2">delivered</p>
          </div>

          <div>
              {
                  orders.map((order) => (
                      <div>
                          <UserOrderItem updateOrder={this.props.updateOrder} key={order._id} order={order} />
                      </div>
                  ))

              }
          </div>
      </div>
  </div>
   
    )
  }
}

export default UserIndex;