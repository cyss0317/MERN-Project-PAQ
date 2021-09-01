import { connect } from 'react-redux';
import Dashboard from './dashboard'
import {fetchUser} from '../../actions/users_actions'
import { fetchUserOrders } from '../../actions/order_actions';
import { fetchAllShipments } from '../../actions/shipment_actions';

const mSTP = ({shipments, session, users, orders }) => ({
  // shipments: shipments.userId[session.user.id]
  user: session.user,
  // owner: session.user.owner
  pending: Object.values(orders).filter(order => order.delivered === false),
  done: Object.values(orders).filter(order => order.delivered === true),
  shipping: Object.values(shipments).filter(shipment => shipment.delivered === false),
  shipped: Object.values(shipments).filter(shipment => shipment.delivered === true)
})

const mDTP = dispatch => ({
  fetchUser: (userId) => dispatch(fetchUser(userId)),
  fetchUserOrders: (userId) => dispatch(fetchUserOrders(userId)),
  fetchAllShipments: (userId) => dispatch(fetchAllShipments(userId))
})

export default connect(mSTP, mDTP)(Dashboard)