import { connect } from 'react-redux';
import { 
  receiveOrders, 
  receiveOrder, 
  receiveUserOrders, 
  removeOrder } 
  from '../../actions/order_actions';
import OrderForm from './order_form';

const mSTP = ({ errors }) => ({
  // errors: errors.orders,
  order: {
    price: '',
    weight: '',
    receiverName: '',
    description: '',
    delivered: '',
    businessOwnerId: '',
    customerId: '',
    shipmentId: ''
  }
})

const mDTP = dispatch => ({
  receiveOrders: orders => dispatch(receiveOrders(orders)),
  receiveOrder: order => dispatch(receiveOrder(order)),
  receiveUserOrders: userOrders => dispatch(receiveUserOrders(userOrders)),
  removeOrder: () => dispatch(removeOrder())
})

export default connect (mSTP, mDTP)(OrderForm);