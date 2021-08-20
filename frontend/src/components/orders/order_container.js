import { connect } from 'react-redux';
import { 
  receiveOrders, 
  receiveOrder, 
  receiveUserOrders, 
  removeOrder,
  createOrder } 
  from '../../actions/order_actions';
import OrderForm from './order_form';

const mSTP = (state) => ({
  errors:  state.errors.orders,
  orders: state.orders,
  currentUserId: state.session.user._id
})

const mDTP = dispatch => ({
  receiveOrders: orders => dispatch(receiveOrders(orders)),
  receiveOrder: order => dispatch(receiveOrder(order)),
  receiveUserOrders: userOrders => dispatch(receiveUserOrders(userOrders)),
  removeOrder: () => dispatch(removeOrder()),
  createOrder: createdOrder => dispatch(createOrder(createdOrder))
})

export default connect (mSTP, mDTP)(OrderForm);