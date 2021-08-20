import { connect } from 'react-redux';
import Dashboard from './dashboard'
import {fetchUser} from '../../actions/users_actions'

const mSTP = ({shipments, session }) => ({
  // shipments: shipments.userId[session.user.id]
  user: session.user 
})

const mDTP = dispatch => ({
  fetchUser: (userId) => dispatch(fetchUser(userId))
})

export default connect(mSTP, mDTP)(Dashboard)