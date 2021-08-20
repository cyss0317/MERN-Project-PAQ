import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

import NavBar from './navbar';

const mapStateToProps = ({session,history}) => ({
  loggedIn: session.isAuthenticated,
  history: history,
  user: session.user,
  currentUserId: session.user.id 
});

const mDTP = dispatch => ({
  logout: () => dispatch(logout())
})

export default connect(mapStateToProps,mDTP)(NavBar);