import { connect } from 'react-redux';
import Dashboard from './dashboard'

const mSTP = ({shipments, session }) => ({
  // shipments: shipments.userId[session.user.id]
})

const mDTP = dispatch => ({

})

export default connect(mSTP, mDTP)(Dashboard)