import { connect } from 'react-redux';
import { 
  receiveOrders, 
  receiveOrder, 
  receiveUserOrders, 
  removeOrder,
  createOrder } 
  from '../../actions/order_actions';
import { shipmentsByDeliveryStatus } from '../../actions/shipment_actions';

import OrderForm from './order_form';

const mSTP = (state) => {
  // console.log(state.shipments)
  // let user = Object.values(state.shipments);
  // for(let i = 0; i < user.length; i++){
  //   console.log(user[i].userId.name) 
  // }

  return{
    errors:  state.errors.orders,
    orders: state.orders,
    currentUserId: state.session.user._id,
    shipments: Object.values(state.shipments),
    BOId: state.shipments,
    
  }
  
}

const mDTP = dispatch => ({
  receiveOrders: orders => dispatch(receiveOrders(orders)),
  receiveOrder: order => dispatch(receiveOrder(order)),
  receiveUserOrders: userOrders => dispatch(receiveUserOrders(userOrders)),
  removeOrder: () => dispatch(removeOrder()),
  createOrder: createdOrder => dispatch(createOrder(createdOrder)),
  fetchShipments: (delivered) => dispatch(shipmentsByDeliveryStatus(delivered)),
  
})

export default connect (mSTP, mDTP)(OrderForm); 