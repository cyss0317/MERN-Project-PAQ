import { connect } from 'react-redux';
import Dashboard from './dashboard'
import {fetchUser} from '../../actions/users_actions'

const mSTP = ({shipments, session, users }) => ({
  // shipments: shipments.userId[session.user.id]
  user: session.user,
  owner: session.user.owner
})

const mDTP = dispatch => ({
  fetchUser: (userId) => dispatch(fetchUser(userId))
})

export default connect(mSTP, mDTP)(Dashboard)