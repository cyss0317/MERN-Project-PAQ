import { connect } from 'react-redux';
import { receiveUserOrders, updateOrder, deleteOrder } from '../../actions/order_actions';
import EditOrderForm from './edit_order_form';

const mSTP = (state) => ({
  errors: state.errors.orders,
  orders: state.orders,
  currentUserId: state.session.user.id
})

const mDTP = dispatch => ({
  receiveUserOrders: userOrders => dispatch(receiveUserOrders(userOrders)),
  deleteOrder: (id) => dispatch(deleteOrder(id)),
  updateOrder: order => dispatch(updateOrder(order))
})

export default connect(mSTP, mDTP)(EditOrderForm);