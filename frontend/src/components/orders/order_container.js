import { connect } from 'react-redux';
import { 
  receiveOrders, 
  receiveOrder, 
  receiveUserOrders, 
  removeOrder,
  createOrder } 
  from '../../actions/order_actions';
import { shipmentsByDeliveryStatus, updateShipment } from '../../actions/shipment_actions';

import OrderForm from './order_form';

const mSTP = (state) => {
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
  updateShipment: shipment => dispatch(updateShipment(shipment))
})

export default connect (mSTP, mDTP)(OrderForm); 