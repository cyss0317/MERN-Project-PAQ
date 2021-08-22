import { connect } from 'react-redux';
import { fetchUserOrders, updateOrder } from '../../actions/order_actions';
import UserIndex from './user_index_form';

const mSTP = (state) => {
  
  return ({
    errors: state.errors.orders,
    // orders: Object.values(state.orders),
    orders: Object.values(state.orders),
    currentUserId: state.session.user._id
  })
}

const mDTP = (dispatch, ownProps) => {

  return {
    fetchUserOrders: (id) => dispatch(fetchUserOrders(ownProps.match.params._id)),
    updateOrder: (order) => dispatch(updateOrder(order))
  }
}

export default connect(mSTP, mDTP)(UserIndex);