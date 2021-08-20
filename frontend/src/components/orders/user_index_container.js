import { connect } from 'react-redux';
import { fetchUserOrders } from '../../actions/order_actions';
import UserIndex from './user_index_form';

const mSTP = (state) => {
  return ({
    errors: state.errors.orders,
    orders: state.orders.data,
    currentUserId: state.session.user.id
  })
}

const mDTP = dispatch => ({
  fetchUserOrders: userOrders => dispatch(fetchUserOrders(userOrders))
})

export default connect(mSTP, mDTP)(UserIndex);