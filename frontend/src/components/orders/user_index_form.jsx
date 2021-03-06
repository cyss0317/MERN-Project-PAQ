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
    const { orders, updateOrder, deleteOrder, fetchUserOrders, fetchShipments, updateShipment } = this.props; 
    return( 
       
      <div id="main-container">
      <div id='table-main'>
          <h1 id='table-title'>List of orders</h1>
          <div id="table-columns-order">
              <p id="p3">Departure</p>
              <p id="p2">Price($)</p>
              <p id="p2">Weight(lb)</p>
              <p id="p2">ReceiverName</p>
              <p id="p2">Description</p>
              <p id="p2">delivered</p>
          </div>

          <div>
              {
                orders.map((order, index) => (
                  <div key={order._id}>
                        <UserOrderItem updateOrder={updateOrder} deleteOrder={deleteOrder} fetchUserOrders={fetchUserOrders}
                          fetchShipments={fetchShipments} updateShipment={updateShipment} key={order._id} order={order} />
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