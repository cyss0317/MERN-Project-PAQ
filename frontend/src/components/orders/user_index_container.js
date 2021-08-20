import { connect } from 'react-redux';
import { fetchUserOrders } from '../../actions/order_actions';
import UserIndex from './user_index_form';

const mSTP = (state) => {
  
  return ({
    errors: state.errors.orders,
    // orders: Object.values(state.orders),
    orders: state.orders,
    currentUserId: state.session.user._id
  })
}

const mDTP = (dispatch, ownProps) => {

  return {
    fetchUserOrders: () => dispatch(fetchUserOrders(ownProps.match.params._id))
  }
}

export default connect(mSTP, mDTP)(UserIndex);